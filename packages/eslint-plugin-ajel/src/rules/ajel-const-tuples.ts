import { TSESTree } from '@typescript-eslint/utils';
import { createRule } from '../utils/createRule';
import { hasAjelCallExpressionChild } from '../utils/hasAjelCallExpressionChild';

type Options = [
  {
    ajelAlias?: string;
    sjelAlias?: string;
  },
];
type MessageIds = 'const';

const rule = createRule<Options, MessageIds>({
  name: 'ajel-const-tuples',
  meta: {
    type: 'problem',
    docs: {
      description: 'This rule enforces the use of a const calling ajel or sjel',
      recommended: 'error',
    },
    schema: [
      {
        type: 'object',
        properties: {
          ajelAlias: {
            type: 'string',
          },
          sjelAlias: {
            type: 'string',
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      const: "Utilize 'const' when calling {{ajelOrSjel}}",
    },
  },
  defaultOptions: [
    {
      ajelAlias: 'ajel',
      sjelAlias: 'sjel',
    },
  ],

  create: (context, [options]) => {
    return {
      VariableDeclaration(node: TSESTree.VariableDeclaration): void {
        const [hasAjelCallExpression, ajelOrSjel] = hasAjelCallExpressionChild(
          node,
          options.ajelAlias,
          options.sjelAlias
        );

        if (hasAjelCallExpression && ajelOrSjel) {
          if (node.kind !== 'const') {
            context.report({
              node,
              messageId: 'const',
              data: {
                ajelOrSjel:
                  ajelOrSjel === 'ajel' ? options.ajelAlias : options.sjelAlias,
              },
            });
          }
        }
      },
    };
  },
});

export default rule;
