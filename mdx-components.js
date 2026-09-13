import Gallery from './app/components/Gallery'

export function useMDXComponents(components) {
  return {
    Gallery,
    ...components,
  }
}