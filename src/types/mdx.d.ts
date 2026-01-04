import type { ReactElement } from 'react';

declare module '*.mdx' {
  const MDXComponent: (props: any) => ReactElement;
  export default MDXComponent;
}
