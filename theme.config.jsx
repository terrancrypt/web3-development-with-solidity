import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

export default {
  logo: <span>Web3 Development with Solidity</span>,
  project: {
    link: 'https://github.com/terrancrypt/web3-development-with-solidity',
  },
  docsRepositoryBase:
    'https://github.com/terrancrypt/web3-development-with-solidity',
  feedback: {
    content: 'Có câu hỏi? Hãy để lại feedback →',
    useLink: () =>
      `https://github.com/terrancrypt/web3-development-with-solidity/discussions/`,
  },
  editLink: {
    component: null,
  },
  toc: {
    component: false,
  },
  head() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      'https://web3.terrancrypt.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <title>Web3 Development with Solidity - TerranCrypt</title>
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
        <meta
          property="og:title"
          content={frontMatter.title || 'Web3 Development with Solidity'}
          data-next-head
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            'The ultimate guide to Web3 development using Solidity'
          }
        />
      </>
    );
  },
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://terrancrypt.com" target="_blank">
          TerranCrypt
        </a>
        .
      </span>
    ),
  },
};
