import User from "./User";
import Company from "./Company";
import { CustomMap } from "./CustomMap";

const customMap = new CustomMap("map");

setInterval(() => {
  const user = new User();
  customMap.addMarker(user);
}, 1000);
