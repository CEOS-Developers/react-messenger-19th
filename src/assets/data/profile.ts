import { CdhProfileIcon, HhiProfileIcon, HscProfileIcon, YesProfileIcon, BhwProfileIcon } from '../../assets';

export const profileIcons: Record<number, React.FC<React.SVGProps<SVGSVGElement>>> = {
  0: BhwProfileIcon,
  1: HhiProfileIcon,
  2: YesProfileIcon,
  3: HscProfileIcon,
  4: CdhProfileIcon,
};
