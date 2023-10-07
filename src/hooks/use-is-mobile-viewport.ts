import { useMediaQuery } from 'usehooks-ts';

export function useIsMobileViewport() {
  return useMediaQuery('(max-width: 768px)');
}

export function useIsTabletViewport() {
  return useMediaQuery('(max-width: 1280px)');
}
