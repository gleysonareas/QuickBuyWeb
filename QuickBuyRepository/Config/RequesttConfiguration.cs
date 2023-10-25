using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuyDomain.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuyRepository.Config
{
    public class RequesttConfiguration : IEntityTypeConfiguration<Requestt>
    {
        public void Configure(EntityTypeBuilder<Requestt> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.DateRequest).IsRequired();
            builder.Property(x => x.DeliveryForecastDate).IsRequired();
            builder.Property(x => x.ZipCode).IsRequired().HasMaxLength(10);
            builder.Property(x => x.State).IsRequired().HasMaxLength(100);
            builder.Property(x => x.City).IsRequired().HasMaxLength(100);
            builder.Property(x => x.Address).IsRequired().HasMaxLength(100);
            builder.Property(x => x.AddressNumber).IsRequired();
            builder.HasOne(x => x.Payment);
        }
    }
}
