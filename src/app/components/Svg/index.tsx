import { IconProps } from "../../utils/types";
import SvgClass from "../../utils/svg";

interface SvgPropsExtended extends Partial<IconProps> {
	name: string;
}
const Svg = ({ name, ...props }: SvgPropsExtended) => {
	const Svg = new SvgClass(props);
	return Svg.getSvg(name as any);
};

export default Svg;
