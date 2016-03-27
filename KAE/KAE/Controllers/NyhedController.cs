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
            List<object> nyhed = new List<object>();

            object obj = new { status = "success", Id = n.Id, Titel = n.Titel, Dato = n.Dato, Tekst = n.Tekst };
            return Json(obj, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Create(string titel, string tekst, DateTime dato, List<ForeningsTagSet> ftList)
        {
            try
            {
                dato = DateTime.Now;
                NyhedSet n = db.NyhedSet1.Add(new NyhedSet() { Titel = titel, Tekst = tekst, Dato = dato, ForeningsTagSet = ftList });

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
        public ActionResult Update(int id, string titel, string tekst, List<ForeningsTagSet> ftList)
        {
            try
            {
                NyhedSet n = db.NyhedSet1.Find(id);
                List<ForeningsTagSet> newFtList = new List<ForeningsTagSet>();

                for(int i = 0; i < ftList.Count; i++)
                {
                    newFtList.Add(ftList[i]);
                }

                db.ForeningsTagSet1.RemoveRange(n.ForeningsTagSet);

                n.Titel = titel;
                n.Tekst = tekst;
                n.ForeningsTagSet = newFtList;

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