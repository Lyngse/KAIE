using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Security.Cryptography;
using System.Text;

namespace KAIE.Controllers
{
    public class AuthenticationController : Controller
    {
        KAIEDBContainer db = new KAIEDBContainer();
        // GET: Authentication
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult IsLogged()
        {
            if (Session["UserId"] == null)
            {
                return Json(new { isLoggedIn = false, status = "success" }, JsonRequestBehavior.AllowGet);
            }
            Administrator a = db.AdministratorSet.Find(Session["UserId"]);
            return Json(new { isLoggedIn = true, adminId = a.Id, status = "success" }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult LogIn(string brugernavn, string kodeord)
        {
            string hashedPass = GetHashed(kodeord);
            Administrator admin = db.AdministratorSet.SingleOrDefault(a => a.Brugernavn == brugernavn && a.Kodeord == hashedPass);
            if (admin != null)
            {
                Session["IsAuthorized"] = true;
                Session["UserId"] = admin.Id;
                return Json(new { auth = "authorized", AdminId = admin.Id});
            }
            else return Json(new { auth = "failed" });
        }

        [HttpPost]
        public ActionResult Register(string brugernavn, string kodeord)
        {
            Administrator a = new Administrator() { Brugernavn = brugernavn, Kodeord = GetHashed(kodeord) };
            db.AdministratorSet.Add(a);
            db.SaveChanges();
            return Json(new { status = "Success" });
        }

        [HttpPost]
        public ActionResult LogOut()
        {
            Session["IsAuthorized"] = null;
            Session["UserId"] = null;
            return Json(new { status = "success" });
        }

        private string GetHashed(string password)
        {
            byte[] bytes = Encoding.UTF8.GetBytes(password);
            SHA256Managed hashstring = new SHA256Managed();
            byte[] hash = hashstring.ComputeHash(bytes);
            return Convert.ToBase64String(hash);
        }
    }
}