'use client'
import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@/mdx-components";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

export default function RenderMDX({ source }: { source: string }) {
  const mdxComponents = useMDXComponents();
  const [Compiled, setCompiled] = useState<React.ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { default: MDXComponent } = await evaluate(source, {
          ...runtime,
          Fragment,
          useMDXComponents: () => mdxComponents,
        });
        if (!cancelled) setCompiled(() => MDXComponent);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [source, mdxComponents]);

  return (
    <MDXProvider components={mdxComponents}>
      {error ? (
        <p className="text-red-600">Error: {error}</p>
      ) : Compiled ? (
        <Compiled />
      ) : (
        <p>Loading...</p>
      )}
    </MDXProvider>
  );
}