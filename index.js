const authApi = require("./Auth");
const settingsApi = require("./Settings");
const userApi = require("./User");
const kernelApi = require("./Kernel");
const notificationsApi = require("./Notification");
const aclApi = require("./Acl");
const mediaApi = require("./Media");
const localizationApi = require("./Localization");
const jwtApi = require("./Jwt");
const formsApi = require("./Forms");
const orbitalApi = ({
  config,
  userModel,
  permissionsModel,
  notificationsModel,
  formsModel,
  kernelModel,
  settingsModel
}) => {
  let authApiRoutes = authApi({
    config,
    userModel,
    permissionsModel,
    formsModel
  });
  let kernelApiRoutes = kernelApi({
    config,
    kernelModel,
    permissionsModel,
    formsModel
  });
  let settingsApiRoutes = settingsApi({
    config,
    settingsModel,
    permissionsModel,
    formsModel
  });
  let notificationsApiRoutes = notificationsApi({
    config,
    settingsModel,
    permissionsModel,
    formsModel,
    notificationsModel
  });
  let aclApiRoutes = aclApi({ config, permissionsModel, formsModel });
  let formsApiRoutes = formsApi({ config, permissionsModel, formsModel });
  let userApiRoutes = userApi({
    config,
    userModel,
    permissionsModel,
    formsModel
  });
  let localizationApiRoutes = localizationApi({
    userModel,
    permissionsModel,
    formsModel
  });
  let jwtApiRoutes = jwtApi({
    config,
    userModel,
    permissionsModel,
    formsModel
  });
  let mediaApiRoutes = mediaApi({
    config
  });
  return {
    authApiRoutes,
    settingsApiRoutes,
    aclApiRoutes,
    formsApiRoutes,
    userApiRoutes,
    localizationApiRoutes,
    jwtApiRoutes,
    mediaApiRoutes,
    kernelApiRoutes,
    notificationsApiRoutes
  };
};

module.exports = orbitalApi;
