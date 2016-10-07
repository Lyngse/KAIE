using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace KAIE.Attributes
{
    public class KAIEAuthAttributes : AuthorizeAttribute, IAuthorizationFilter
    {
        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            if (filterContext.HttpContext.Session["IsAuthorized"] != null || HttpContext.Current.Session["IsAuthorized"] != null)
            {
                return;
            }
            else
            {
                JsonResult jr = new JsonResult();
                jr.Data = new { status = "auth failed" };
                jr.JsonRequestBehavior = JsonRequestBehavior.AllowGet;

                filterContext.HttpContext.Response.StatusCode = 403;
                filterContext.Result = jr;

            }
        }
    }
}