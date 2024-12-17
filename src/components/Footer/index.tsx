import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-components';
import {STARGAZER} from "@/constant";

const Footer: React.FC = () => {
  const defaultMessage = 'Made by Yu';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Stargazer',
          title: 'Stargazer',
          href: STARGAZER,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined/> GitHub</>,
          href: 'https://github.com/',
          blankTarget: true,
        },
        {
          key: 'Gundam',
          title: 'Gundam',
          href: 'https://ja.wikipedia.org/wiki/%E6%A9%9F%E5%8B%95%E6%88%A6%E5%A3%AB%E3%82%AC%E3%83%B3%E3%83%80%E3%83%A0SEED_C.E.73_STARGAZER',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
