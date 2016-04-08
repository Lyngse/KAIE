using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;

namespace KAIE.Controllers
{
    public class AdministratorController : Controller
    {
        KAIEDBContainer db = new KAIEDBContainer();

        public ActionResult Read(int id)
        {
            Nyheder n = db.NyhederSet.Find(id);

            object obj = new { status = "success", Id = n.Id, Titel = n.Titel, Dato = n.Dato, Tekst = n.Tekst, Forfatter = n.Forfatter };
            return Json(obj, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Create(string titel, string tekst, string forfatter)
        {
            DateTime dato = DateTime.Now;
            Nyheder n = db.NyhederSet.Add(new Nyheder() { Titel = titel, Tekst = tekst, Forfatter = forfatter, Dato = dato });

            db.SaveChanges();

            return Json(new { status = "success", message = "En ny nyhed blev uploadet", Id = n.Id }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Update(int id, string titel, string tekst, string forfatter)
        {
            Nyheder n = db.NyhederSet.Find(id);

            n.Titel = titel;
            n.Tekst = tekst;
            n.Forfatter = forfatter;

            db.Entry(n).State = EntityState.Modified;
            db.SaveChanges();

            return Json(new { status = "success", message = "Nyhed redigeret" }, JsonRequestBehavior.AllowGet);

        }

        [HttpPost]
        public ActionResult Delete(int id)
        {
            Nyheder n = db.NyhederSet.Find(id);
            db.NyhederSet.Remove(n);
            db.SaveChanges();

            return Json(new { status = "success", message = "Nyhed slettet" }, JsonRequestBehavior.AllowGet);
        }
    }
}