using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Lab2.Models;

namespace Lab2.Controllers
{
    public class CatalogController : Controller {

        private DataContext dbContext;

        // class constructor
        public CatalogController(DataContext context){
            this.dbContext = context;

        }

        public IActionResult Index(){
            return View();
        }

        public IActionResult Register(){
            return View();

        }

        [HttpPost]
        public IActionResult SaveCar( [FromBody] Car theCar ){
            // add the car to the table
            dbContext.Cars.Add(theCar);

            // save changes 
            dbContext.SaveChanges();
            
            // return the car
            return Json(theCar);
        }

        [HttpGet]
        public IActionResult GetCatalog(){
            // retrieve all records from table
            var carList = dbContext.Cars.ToList();

            // return the car
            return Json(carList);
        }

    }
}