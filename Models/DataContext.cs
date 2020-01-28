
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Lab2.Models {
    public class DataContext : DbContext{
        /*represents the connection with the database
        used to access different table (classes)
        to retrieve and store information/records */

        public DataContext(DbContextOptions<DataContext> options) : base(options){

        }

        // specify which models requires a table in the database

        public DbSet<Car> Cars {get; set;}
    }
}