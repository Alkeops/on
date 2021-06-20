import React from "react";
import Edit from "@assets/icons/edit.svg";
import Filter from "@assets/icons/filter.svg";
import Almacena from "@assets/icons/almacena.svg";
import Adapta from "@assets/icons/adapta.svg";
import Resize from "@assets/icons/resize.svg";
import Organize from "@assets/icons/organize.svg";
import File from "@assets/icons/file.svg";
import Gift from "@assets/icons/gift.svg";
import Layer from "@assets/icons/layer.svg";
import Export from "@assets/icons/export.svg";
import Campos from "@assets/icons/campos.svg";
import Pencil from "@assets/icons/pencil.svg";
import Minimize from "@assets/icons/minimize.svg";
import Upload from "@assets/icons/upload.svg";
import Import from "@assets/icons/import.svg";
import Share from "@assets/icons/share.svg";
import StarterCheck from "@assets/icons/starterCheck.svg";
import EnterpriseCheck from "@assets/icons/enterpriseCheck.svg";
import {
  AiOutlineMail as MailIcon,
  AiOutlineWhatsApp as Whatsapp,
  AiOutlineExpand as Expand,
  AiOutlineBgColors as Color,
} from "react-icons/ai";
import {
  FaHeadset as Headset,
  FaFacebookF as Facebook,
  FaTwitter as Twitter,
  FaYoutube as Youtube,
  FaInstagram as Instagram,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa";
import {CgRename as Rename} from "react-icons/cg";
import {ImMakeGroup as Group} from "react-icons/im";
const NubeskIcon = ({ icon }) => {
  const iconsMap = {
    Adapta,
    Almacena,
    Campos,
    Color,
    Edit,
    EnterpriseCheck,
    Expand,
    Export,
    Facebook,
    File,
    Filter,
    Gift,
    Group,
    Headset,
    Import,
    Instagram,
    Layer,
    Linkedin,
    MailIcon,
    Minimize,
    Organize,
    Pencil,
    Rename,
    Resize,
    Share,
    StarterCheck,
    Twitter,
    Upload,
    Whatsapp,
    Youtube,
  };

  const Icon = iconsMap[icon];

  return <Icon className={`icon ${icon}`} />;
};

export default NubeskIcon;
