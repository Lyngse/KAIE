using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using KAIE.Attributes;

namespace KAIE.Controllers
{
    //[KAIEAuthAttributes]
    public class AdministratorController : Controller
    {
        KAIEDBContainer db = new KAIEDBContainer();

        [HttpPost]
        public ActionResult CreateNyhed(string titel, string tekst, string forfatter)
        {
            DateTime dato = DateTime.Now;

            Nyheder n = db.NyhederSet.Add(new Nyheder() { Titel = titel, Tekst = tekst, Forfatter = forfatter, Dato = dato });

            db.SaveChanges();

            return Json(new { status = "success", message = "En ny nyhed blev uploadet" });
        }

        [HttpPost]
        public ActionResult UpdateNyhed(int id, string titel, string tekst, string forfatter)
        {
            Nyheder n = db.NyhederSet.Find(id);

            n.Titel = titel;
            n.Tekst = tekst;
            n.Forfatter = forfatter;

            db.Entry(n).State = EntityState.Modified;
            db.SaveChanges();

            return Json(new { status = "success", message = "Nyhed redigeret" });

        }

        [HttpPost]
        public ActionResult DeleteNyhed(int id)
        {
            Nyheder n = db.NyhederSet.Find(id);
            db.NyhederSet.Remove(n);
            db.SaveChanges();

            return Json(new { status = "success", message = "Nyhed slettet" });
        }

        [HttpPost]
        public ActionResult CreateAlbum(string navn, string beskrivelse)
        {
            DateTime dato = DateTime.Now;
            Album a = db.AlbumSet.Add(new Album { Navn = navn, Beskrivelse = beskrivelse, Dato = dato });
            db.SaveChanges();

            return Json(new { status = "success" });
        }

        [HttpPost]
        public ActionResult UpdateAlbum(int id, string navn, string beskrivelse)
        {
            Album a = db.AlbumSet.Find(id);

            a.Navn = navn;
            a.Beskrivelse = beskrivelse;

            db.Entry(a).State = EntityState.Modified;
            db.SaveChanges();

            return Json(new { status = "success", message = "Album redigeret" });
        }

        [HttpPost]
        public ActionResult DeleteAlbum(int id)
        {
            Album a = db.AlbumSet.Find(id);

            foreach (Billede b in a.Billede.ToList())
            {
                a.Billede.Remove(b);
            }
            db.AlbumSet.Remove(a);
            db.SaveChanges();

            return Json(new { status = "success", message = "Album slettet" });
        }

        [HttpPost]
        public ActionResult DeleteBillede(int id)
        {
            Billede b = db.BilledeSet.Find(id);

            db.BilledeSet.Remove(b);
            db.SaveChanges();

            return Json(new { status = "success", message = "Billede slettet" });
        }

        [HttpPost]
        public ActionResult UploadBilleder(int id, byte[] billeder) //id skal være et albums id
        {
            Album a = db.AlbumSet.Find(id);

            return Json(new { status = "success", message = "Billeder uploadet" });
        }
    }
}