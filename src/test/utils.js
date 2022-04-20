/**
 * 
 * Retrive attribute from jsHandle object
 * 
 * @param {jsHandle} element 
 * @param {string} attribute
 * @returns value
 */
export const getProp = async (element, attribute) => {
  const propertyHandle = await element.getProperty(attribute);
  const propertyValue = await propertyHandle.jsonValue();
  return propertyValue;
};
