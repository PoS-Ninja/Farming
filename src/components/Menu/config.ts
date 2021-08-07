import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Exchange',
    icon: 'ExchangeIcon',
    href: 'https://exchange.2local.io/',
    items: [
      {
        label: 'BNB',
        href: 'https://exchange.2local.io/',
        icon: 'BNBIcon',
        items: [
          {
            label: '2LC',
            href: 'https://exchange.2local.io/?coin=BNB&token=2LC',
            icon: 'L2LIcon',
          },
          {
            label: 'BUSD',
            href: 'https://exchange.2local.io/?coin=BNB&token=BUSD',
            icon: 'BUSDIcon',
          },
          {
            label: 'BETH',
            href: 'https://exchange.2local.io/?coin=BNB&token=BETH',
            icon: 'BETHIcon',
          },
        ],
      },
      // {
      //   label: "ETH",
      //   href: "/?coin=eth",
      //   icon: "ETHIcon",
      // },
      // {
      //   label: "USD",
      //   href: "/?coin=usd",
      //   icon: "USDIcon",
      // },
      // {
      //   label: "XLM",
      //   href: "/?coin=xlm",
      //   icon: "XLMIcon",
      // },
      // {
      //   label: "BTC",
      //   href: "/?coin=btc",
      //   icon: "BTCIcon",
      // },
    ],
  },
  {
    label: 'Pools',
    icon: 'LaunchPoolIcon',
    href: 'staking',
    items: [
      {
        label: 'Yield Farming',
        href: '/',
        icon: 'BNB2LCIcon',
      },
      {
        label: 'Trading Pools',
        href: 'https://trading.2local.io/',
        icon: 'BETH2LCIcon',
      },
      {
        label: 'Staking Pools',
        href: 'https://staking.2local.io/',
        icon: 'BUSD2LCIcon',
      },
    ],
  },
  {
    label: 'Dapps',
    icon: 'YieldFarmingIcon',
    href: 'dapp',
    items: [
      {
        label: 'Multi-send',
        href: 'https://msend.2local.io/',
        icon: 'BNB2LCIcon',
      },
    ],
  },
  {
    label: 'Airdrops',
    icon: 'AirdropIcon',
    href: '/airdrops',
    items: [
      {
        label: '2LC 2local',
        href: '/airdrops',
        icon: 'L2L2LCIcon',
      },
    ],
  },
  {
    label: 'NFT',
    icon: 'DiamondMenuIcon',
    href: '/airdrops',
    items: [
      {
        label: '2LC 2local',
        href: '/airdrops',
        icon: 'DiamondIcon',
      },
    ],
  },
]

export default config
