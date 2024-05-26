import { kebabCase } from 'change-case';
import type { MDXComponents } from 'mdx/types';

import HtmlHeading from '@/src/components/ui/Heading';

/** Automatically creates MDX components for headings. */
const getHeadingComponents = () => {
  const components: MDXComponents = {};

  for (let i = 1; i <= 5; i++) {
    components[`h${i}`] = ({ children }) => (
      <HtmlHeading
        as={`h${i as 1 | 2 | 3 | 4 | 5}`}
        id={kebabCase(children)}
      >
        {children}
      </HtmlHeading>
    );
  }

  return components;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...getHeadingComponents(),
    ...components,
  };
}
