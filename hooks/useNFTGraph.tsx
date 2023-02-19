import { request } from "graphql-request";
import useSWRInfinite from "swr/infinite";
import useSWR from "swr";
import Traits from "#/utils/traits.json";
import { useMemo } from "react";

export const traitKeys = Object.keys(Traits).sort() as Array<TraitKey>;
export type TraitKey = keyof typeof Traits;
export type NFTFilters = Record<
  TraitKey,
  { selected: string[]; name: string; values: string[] }
>;
export const defaultFilters = traitKeys.reduce((traits, key) => {
  const trait = Traits[key];
  traits[key] = {
    ...trait,
    selected: new Array<string>(),
  };
  return traits;
}, {} as NFTFilters);

const API_URL = "https://api.thegraph.com/subgraphs/name/acaldas/vividlimited";

async function fullTextSearch(text: string) {
  const result = await request(
    API_URL,
    `{
        vividSearch(text: "'${text}':*") {
          tokenID
        }
      }`
  );
  return result.vividSearch.map((t: { tokenID: string }) => t.tokenID);
}

const fetcher = async ({
  filters,
  pageIndex,
  text,
}: {
  filters: NFTFilters;
  pageIndex: number;
  text: string;
}) => {
  const tokenIds = text?.length > 1 ? await fullTextSearch(text) : undefined;
  const query = filtersToQuery(filters, pageIndex, tokenIds);
  return request(API_URL, query);
};

function filtersToQuery(filters: NFTFilters, page = 0, tokenIds?: string[]) {
  return `{tokens(first: 12, skip: ${
    12 * page
  }, orderBy: tokenID, orderDirection: desc, where: {${traitKeys
    .map((key) => {
      const filter = filters[key];
      return filter.selected.length
        ? `${key}_in: [${filter.selected
            .map((trait) => `"${trait}"`)
            .join(", ")}],`
        : "";
    })
    .join("")}${
    tokenIds
      ? `, tokenID_in:[${tokenIds.map((id) => `"${id}"`).join(", ")}]`
      : ""
  }}) {
    tokenID
    image
  }
}`;
}

export default function (filters: NFTFilters, text: string) {
  return useSWRInfinite<{ tokens: { tokenID: string; image: string }[] }>(
    (pageIndex, previousPageData) => {
      if (previousPageData && !previousPageData.tokens) return null;
      return { filters, pageIndex, text };
    },
    fetcher
  );
}
