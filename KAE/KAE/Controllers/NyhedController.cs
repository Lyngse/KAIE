using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KAE.Controllers
{
    public class NyhedController : Controller
    {
        KAEDBContainer db = new KAEDBContainer();

        public ActionResult Read(int id)
        {
            NyhedSet n = db.NyhedSet1.Find(id);

            object obj = new { status = "success", Id = n.Id, Titel = n.Titel, Dato = n.Dato, Tekst = n.Tekst, Forfatter = n.Forfatter };
            return Json(obj, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Create(string titel, string tekst, string forfatter)
        {
            try
            {
                DateTime dato = DateTime.Now;
                NyhedSet n = db.NyhedSet1.Add(new NyhedSet() { Titel = titel, Tekst = tekst, Forfatter = forfatter, Dato = dato });


                db.SaveChanges();

                return Json(new { status = "success", message = "En ny nyhed blev uploadet", Id = n.Id }, JsonRequestBehavior.AllowGet);
            }
            catch(Exception ex)
            {
                return Json(new { status = "error", message = "En ny nyhed blev ikke uploadet", details = ex.Message }, JsonRequestBehavior.AllowGet);
            }
            
        }

        [HttpPost]
        //Skal parameter id'et se ud som i databasen?? Også de andre parametre fro den sags skyld.
        public ActionResult Update(int id, string titel, string tekst, string forfatter)
        {
            try
            {
                NyhedSet n = db.NyhedSet1.Find(id);

                n.Titel = titel;
                n.Tekst = tekst;
                n.Forfatter = forfatter;

                db.Entry(n).State = EntityState.Modified;
                db.SaveChanges();

                return Json(new { status = "success", message = "Nyhed redigeret" }, JsonRequestBehavior.AllowGet);
            }
            catch(Exception ex)
            {
                return Json(new { status = "error", message = "Nyhed ikke redigeret", details = ex.Message }, JsonRequestBehavior.AllowGet);
            }
            
        }

        [HttpPost]
        public ActionResult Delete(int id)
        {
            try
            {
                NyhedSet n = db.NyhedSet1.Find(id);
                db.NyhedSet1.Remove(n);
                db.SaveChanges();

                return Json(new { status = "success", message = "Nyhed slettet" }, JsonRequestBehavior.AllowGet);
            }
            catch(Exception ex)
            {
                return Json(new { status = "error", message = "Nyhed ikke slettet", details = ex.Message }, JsonRequestBehavior.AllowGet);
            }
            
        }
    }
}