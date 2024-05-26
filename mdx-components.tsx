import type { MDXComponents } from 'mdx/types';

import HtmlHeading from '@/src/components/ui/Heading';
import TypografedText from '@/src/components/ui/TypografedText';

/** Automatically creates MDX components for headings. */
const getHeadingComponents = () => {
  const components: MDXComponents = {};

  for (let i = 1; i <= 5; i++) {
    components[`h${i}`] = ({ children }) => (
      <HtmlHeading as={`h${i as 1 | 2 | 3 | 4 | 5}`}>
        <TypografedText>{children}</TypografedText>
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
