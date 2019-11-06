//the crud service creates [create, read, update, del] endpoints for a mongoose model
const crudService = require("@markab.io/node/crud-service/crud-service")
const mediaService = require("@markab.io/node/media-service/media-service")
const {
  formsService,
  registerForms
} = require("@markab.io/node/forms-service/forms-service")
const {
  registerAction,
  isPermitted
} = require("@markab.io/node/acl-service/acl-service.js")

const Media = ({ config, mediaModel, permissionsModel, formsModel }) => {
  let crudDomainLogic = {
    create: (user, req) => {
      //we need to include is permitted in here
      return {
        isPermitted: isPermitted({ key: "media_create", user }),
        criteria: {}
      };
    },
    read: (user, req) => {
      return {
        isPermitted: isPermitted({ key: "media_read", user }),
        criteria: {}
      };
    },
    update: (user, req) => {
      return {
        isPermitted: isPermitted({ key: "media_update", user }),
        criteria: {}
      };
    },
    del: (user, req) => {
      return {
        isPermitted: isPermitted({ key: "media_delete", user }),
        criteria: {}
      };
    },
    search: (user, req) => {
      return {
        isPermitted: isPermitted({ key: "media_search", user }),
        criteria: {}
      };
    }
  };
  const mediaApi = crudService({ Model: mediaModel, crudDomainLogic });

  //file upload api
  let mediaDomainLogic = {
    getMedia: (user, req, res) => {
      return {
        criteria: {
          tag: user._id,
          token: user.jwtToken,
          query: { _id: user._id }
        },
        isPermitted: true
      };
    },
    saveMedia: (user, req, res) => {
      return {
        criteria: {
          tag: user._id,
          token: user.jwtToken,
          query: { _id: user._id }
        },
        isPermitted: true
      };
    }
  };
  const fileUploadApi = mediaService({
    fileName: "logo",
    modelName: "media",
    mediaDomainLogic,
    isMultiple: false,
    Model: mediaModel,
    fileExtension: ".jpg"
  });

  //forms api
  let formsDomainLogic = {
    read: user => {
      return { criteria: { key: "media" }, isPermitted: true };
    }
  };
  const formsApi = formsService({
    Model: formsModel,
    formsDomainLogic
  });

  //register actions to configure acls in the future (namespace is user here and it will register every action into a permissions table)
  // TODO call this registerDomainAction
  registerAction({
    key: "media",
    domainLogic: crudDomainLogic,
    permissionsModel,
    defaultPermission: false
  });
  registerAction({
    key: "media",
    domainLogic: mediaDomainLogic,
    permissionsModel
  });
  // TODO translate here
  // Intialize the form in the database when the server runs
  registerForms({
    key: "media",
    fields: [
      {
        type: "image",
        name: "image",
        placeholder: "Site Logo"
      },
      {
        type: "gallery",
        name: "gallery",
        placeholder: "Site Images"
      },
      {
        type: "text",
        name: "title",
        placeholder: "Site Title",
        value: "",
        required: true
      },
      {
        type: "text",
        name: "serverLocation",
        placeholder: "Server Location",
        value: "",
        required: true
      }
    ],
    formsModel
  });

  return [mediaApi, fileUploadApi, formsApi];
};

module.exports = Media;