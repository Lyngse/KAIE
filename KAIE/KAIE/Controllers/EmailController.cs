using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net.Mail;
using KAIE.Helpers;

namespace KAIE.Controllers
{
    public class EmailController : Controller
    {
        Email Email = new Email();

        [HttpPost]
        public ActionResult SendEmail(string fornavn, string efternavn, string email, string emne, string besked)
        {
            Email.Send(fornavn, efternavn, email, emne, besked);

            return Json(new { status = "success", message = "Din email er blevet sendt" }, JsonRequestBehavior.AllowGet);
        }
    }
}