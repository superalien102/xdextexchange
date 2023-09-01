import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import LanguageIcon from '@mui/icons-material/Language';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Discord, LifiSmallLogo } from '@transferto/shared/src/atoms/icons';
import { openInNewTab } from '@transferto/shared/src/utils/';
import { useTranslation } from 'react-i18next';
import { MenuKeys, TrackingActions, TrackingCategories } from '..';
import { useUserTracking } from '../../hooks';
import { useDetectDarkModePreference } from '../../providers/ThemeProvider';
import { useMenuStore, useSettingsStore } from '../../stores';
import { EventTrackingTool } from '../../types';

export const useMainMenuContent = () => {
  const { t, i18n } = useTranslation();
  const { trackPageload, trackEvent } = useUserTracking();
  const theme = useTheme();
  const isDarkMode = useDetectDarkModePreference();
  const themeMode = useSettingsStore((state) => state.themeMode);
  const onOpenSupportModal = useMenuStore((state) => state.onOpenSupportModal);

  return [
    {
      label: t('navbar.navbarMenu.theme'),
      prefixIcon: isDarkMode ? (
        <NightlightOutlinedIcon />
      ) : (
        <LightModeOutlinedIcon />
      ),
      url: 'https://github.com/xdextool/',
      triggerSubMenu: MenuKeys.Themes,
    },
    {
      label: t('navbar.language.key'),
      prefixIcon: <LanguageIcon />,
      checkIcon: themeMode === 'light',
      suffixIcon: (
        <Typography
          variant="lifiBodyMedium"
          textTransform={'uppercase'}
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '38px',
          }}
        >
          {i18n.resolvedLanguage}
        </Typography>
      ),
      triggerSubMenu: MenuKeys.Language,
    },
    {
      label: t('navbar.navbarMenu.developers'),
      prefixIcon: <DeveloperModeIcon />,
      triggerSubMenu: MenuKeys.Devs,
    },
    {
      label: 'Twitter',
      prefixIcon: <TwitterIcon />,
      showMoreIcon: false,
      onClick: () => {
        openInNewTab('https://twitter.com/xdextools');
        trackPageload({
          source: 'menu',
          destination: 'twitter-xdextool',
          url: 'https://twitter.com/xdextools',
          pageload: true,
          disableTrackingTool: [
            EventTrackingTool.ARCx,
            EventTrackingTool.Raleon,
          ],
        });
      },
    },
    {
      label: 'Telegram',
      prefixIcon: (
        <Discord
          color={
            theme.palette.mode === 'dark'
              ? theme.palette.white.main
              : theme.palette.black.main
          }
        />
      ),
      showMoreIcon: false,
      onClick: () => {
        openInNewTab('https://t.me/xdextools');
        trackPageload({
          source: 'menu',
          destination: 'discord-xdextools',
          url: 'https://t.me/xdextools',
          pageload: true,
          disableTrackingTool: [
            EventTrackingTool.ARCx,
            EventTrackingTool.Raleon,
          ],
        });
      },
    },
    {
      label: t('navbar.navbarMenu.aboutLIFI'),
      prefixIcon: (
        <LifiSmallLogo
          style={{ flexShrink: 0 }}
          color={
            theme.palette.mode === 'dark'
              ? theme.palette.white.main
              : theme.palette.black.main
          }
        />
      ),
      showMoreIcon: false,
      onClick: () => {
        trackPageload({
          source: 'menu',
          destination: 'xdextool-website',
          url: 'https://xdextool.io',
          pageload: true,
          disableTrackingTool: [
            EventTrackingTool.ARCx,
            EventTrackingTool.Raleon,
          ],
        });
        openInNewTab('https://xdextool.io');
      },
    },
    /* {
      label: t('navbar.navbarMenu.support'),
      prefixIcon: <Discord color={theme.palette.white.main} />,
      onClick: () => {
        trackEvent({
          category: TrackingCategories.Menu,
          action: TrackingActions.OpenSupportModal,
          disableTrackingTool: [
            EventTrackingTool.ARCx,
            EventTrackingTool.Raleon,
          ],
        });
        onOpenSupportModal(true);
      },
      showButton: true,
    }, */
  ];
};
