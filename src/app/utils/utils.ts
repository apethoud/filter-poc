import { ISite, IZone } from '../models/filter';

// Site Mappers

export const iSiteArrayToSiteNameStringArrayMapper = (
  sites: ISite[]
): string[] => {
  return sites.map((site) => site.name);
};

export const iSiteToSiteNameStringMapper = (site: ISite): string => {
  return site.name;
};

export const siteNameStringToISiteMapper = (
  siteName: string,
  sites: ISite[]
): ISite | null => {
  const site = sites.find((s) => s.name === siteName);
  return site || null;
};

// Zone Mappers

export const iZoneArrayToZoneNameStringArrayMapper = (
  zones: IZone[]
): string[] => {
  return zones.map((zone) => zone.name);
};

export const iZoneToZoneNameStringMapper = (zone: IZone): string => {
  return zone.name;
};

export const zoneNameStringToIZoneMapper = (
  zoneName: string,
  zones: IZone[]
): IZone | null => {
  const zone = zones.find((z) => z.name === zoneName);
  return zone || null;
};
