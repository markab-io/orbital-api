//the crud service creates [create, read, update, del] endpoints for a mongoose model
const {
  aclService,
  registerAction,
  isPermitted
} = require("@markab.io/node/acl-service/acl-service.js")
const crudService = require("@markab.io/node/crud-service/crud-service")

const Acl = ({ config, permissionsModel }) => {
  const aclApi = aclService({ permissionsModel });
  let crudDomainLogic = {
    create: (user, req) => {
      return {
        isPermitted: isPermitted({ key: "acl_create", user }),
        criteria: {}
      };
    },
    read: (user, req) => {
      return {
        isPermitted: isPermitted({ key: "acl_read", user }),
        populate: "users",
        criteria: {}
      };
    },
    update: (user, req) => {
      return {
        isPermitted: isPermitted({ key: "acl_update", user }),
        criteria: {}
      };
    },
    del: (user, req) => {
      return {
        isPermitted: isPermitted({ key: "acl_delete", user }),
        criteria: {}
      };
    },
    search: (user, req) => {
      return {
        isPermitted: isPermitted({ key: "acl_search", user }),
        criteria: {}
      };
    }
  };

  /* Zee:
    Syntax question: what's up with the argument list here? The Model parameter is given permissionsModel!  
    why not just passing permissionModel? I've never seen an object being passed like this. 
 */
  const crudApi = crudService({ Model: permissionsModel, crudDomainLogic });
  registerAction({
    key: "acl",
    domainLogic: crudDomainLogic,
    permissionsModel,
    defaultPermission: false
  });
  return [crudApi, aclApi];
};

module.exports =  Acl;
