import { type FieldValues } from 'react-hook-form';

/**
 * Adds type-safe register name for nested inputs.
 * @param fieldName
 */
export const registerNestedField = <FormType extends FieldValues>(
  fieldName: keyof FormType,
) => fieldName;
