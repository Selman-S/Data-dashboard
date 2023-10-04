import SideMenu  from './SideMenu';

import  { SideMenuProps } from "./SideMenu";

export default {
  children:'',
  title: "Component/SideMenu",
  component: SideMenu,
};

const Template = (args: SideMenuProps) => <SideMenu {...args} />;

const props = {
  defaultProps:()=>({}),
};
export const SideMenuStory:any = Template.bind({});
const defaultProps = props.defaultProps();
SideMenuStory.args = {
  ...defaultProps,
};