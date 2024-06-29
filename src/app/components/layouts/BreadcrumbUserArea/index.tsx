import UserIcon from '@/app/_asset/icon/user-icon.svg';
import { isBreadcrumbListSelectURL, isUserNameSelectURL } from '@/app/_const/selectURL.ts';

type Props = {
  pathname: string;
}

export const BreadcrumbUserArea = (props: Props): JSX.Element => {
  const { pathname } = props;
  const isBreadcrumbList = isBreadcrumbListSelectURL.includes(pathname);
  const isUserName = isUserNameSelectURL.includes(pathname);

  return (
    <div className="p-breadcrumb-user-area">
    {/* TODO: URLに沿った表示にする */}
    {isBreadcrumbList ? 
      <div className="breadcrumb-list">
        <p>HOME</p>
        <p>/</p>
        <p>詳細</p>
      </div>
    :
      <div className="breadcrumb-list__bothends-space"></div>
    }
    {/* TODO: 取得ユーザー情報に沿った表示名にする */}
    {isUserName ? 
      <div className="user-name">　
        <i><UserIcon /></i>
        <p>ハチモジトシトウ</p>
      </div>
    :
      <div className="user-name__bothends-space"></div>

    }
    </div>
  );
}