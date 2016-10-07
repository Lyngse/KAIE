using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;

namespace KAIE.Controllers
{
    public class PublicController : Controller
    {
        KAIEDBContainer db = new KAIEDBContainer();

        public ActionResult ReadNyhed(int id)
        {
            Nyheder n = db.NyhederSet.Find(id);

            object obj = new { status = "success", Id = n.Id, Titel = n.Titel, Dato = n.Dato, Tekst = n.Tekst, Forfatter = n.Forfatter };
            return Json(obj, JsonRequestBehavior.AllowGet);
        }

        public ActionResult ReadNyheder()
        {
            List<Nyheder> nList = new List<Nyheder>();

            foreach(Nyheder n in db.NyhederSet.ToList())
            {
                nList.Add(n);
            }


            object obj = new { status = "success", nList };
            return Json( obj , JsonRequestBehavior.AllowGet);
        }

        public ActionResult ReadBillede(int id)
        {
            Billede b = db.BilledeSet.Find(id);

            Object obj = new { status = "success", Id = b.Id, BilledeFil = b.BilledeFil };
            return Json(obj, JsonRequestBehavior.AllowGet);

        }

        public ActionResult ReadBilleder(int id) //id'et på det specifikke album
        {
            Album a = db.AlbumSet.Find(id);
            List<Billede> billeder = new List<Billede>();

            foreach (Billede b in a.Billede)
            {
                billeder.Add(new Billede { Id = b.Id, BilledeFil = b.BilledeFil});
            }

            Object obj = new { status = "success", billeder };
            return Json(obj, JsonRequestBehavior.AllowGet);
        }

    }
}