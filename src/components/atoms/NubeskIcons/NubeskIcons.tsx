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

const NubeskIcon = ({ icon }) => {
  const iconsMap = {
    Adapta,
    Almacena,
    Campos,
    Edit,
    EnterpriseCheck,
    Export,
    File,
    Filter,
    Gift,
    Import,
    Layer,
    Minimize,
    Organize,
    Pencil,
    Resize,
    Share,
    StarterCheck,
    Upload,
  };

  const Icon = iconsMap[icon];

  return <Icon className={`icon`} />;
};

export default NubeskIcon;
