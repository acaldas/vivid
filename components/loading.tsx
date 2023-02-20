"use client";

import Image from "next/image";
import LogoBig from "#/public/images/logo_big.svg";
import ProgressBar from "#/components/progress-bar";
import { useRouter } from "next/navigation";
import { startTransition, useEffect, useRef, useState } from "react";

const ROUTES = [
  "/home",
  "/contact",
  "/events",
  "/login",
  "/products/nft",
  "/team",
];

export default function Loading() {
  const router = useRouter();
  const [routes, setRoutes] = useState(
    ROUTES.map((route) => ({ route, prefetched: false }))
  );
  const fetchBackupRef = useRef<
    | ((input: RequestInfo | URL, init?: RequestInit) => Promise<Response>)
    | undefined
  >(undefined);
  const [revokeProxy, setRevokeProxy] = useState<() => void>();
  const [isReady, setIsReady] = useState<boolean | undefined>(true);
  const first = useRef<boolean>();

  useEffect(() => {
    if (first.current) {
      return;
    }
    first.current = true;
    // const prefetched = localStorage.getItem("prefetched") === "true";
    // if (prefetched) {
    //   setIsReady(true);
    //   setTimeout(() => {
    //     router.replace("/home");
    //   });
    //   return;
    // }

    setIsReady(false);
    ROUTES.forEach((r) => router.prefetch(r));
    const index = setTimeout(() => {
      setIsReady(true);
      localStorage.setItem("prefetched", "true");
      setTimeout(() => {
        router.replace("/home");
      }, 250);
    }, 2000);
  }, []);

  // useEffect(() => {
  //   if (fetchBackupRef.current) {
  //     return;
  //   }
  //   fetchBackupRef.current = window.fetch;
  //   const fetchProxy = Proxy.revocable(window.fetch, {
  //     apply(fetch, that, args) {
  //       // @ts-expect-error
  //       const result = fetch.apply(that, args);

  //       // listen for prefetch requests to finish
  //       result.then(() => {
  //         const [url, req] = args;
  //         const route = routes.find(
  //           (r) => `${location.origin}${r.route}` === url
  //         );
  //         if (route && req.headers?.["Next-Router-Prefetch"] == "1") {
  //           console.log(route.route, "prefetched!");
  //           setRoutes((routes) =>
  //             routes.map((r) =>
  //               r.route === route.route ? { ...r, prefetched: true } : r
  //             )
  //           );
  //         }
  //       });
  //       console.log("PASSOU AQUI");
  //       return result;
  //     },
  //   });
  //   window.fetch = fetchProxy.proxy;
  //   setRevokeProxy(() => fetchProxy.revoke);

  //   // prefetch all routes
  //   routes.forEach((r) => router.prefetch(r.route));
  // }, []);

  // useEffect(() => {
  //   if (fetchBackupRef.current && !routes.find((r) => !r.prefetched)) {
  //     startTransition(() => {
  //       revokeProxy?.();
  //       window.fetch = fetchBackupRef.current!;
  //       setIsReady(true);
  //       router.replace("/home");
  //     });
  //   }
  // }, [fetch, routes]);

  return (
    <div
      className={`flex flex-col w-full h-full items-center justify-center px-4 transition transition-1000 ease-out opacity-${
        isReady ? 0 : 100
      }`}
    >
      {isReady !== undefined && (
        <>
          <div className="max-h-[24vh] relative w-full h-full">
            <Image src={LogoBig} alt="Vivid logo" priority fill />
          </div>
          <div className="flex justify-center mt-[5vh] max-w-full">
            <ProgressBar />
          </div>
        </>
      )}
    </div>
  );
}
