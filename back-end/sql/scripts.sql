USE [pruebas]
GO
/****** Object:  StoredProcedure [dbo].[deletedatos]    Script Date: 22/01/2017 19:42:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE procedure [dbo].[deletedatos]
@datosId bigint
as
delete from datos where datosId=@datosId

GO
/****** Object:  StoredProcedure [dbo].[guardardatos]    Script Date: 22/01/2017 19:42:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE procedure [dbo].[guardardatos]

@producto varchar(80),@existencia int,@precio decimal(18,0),@proveedor varchar(80)
as

insert into datos ( producto , existencia,precio,proveedor)
	values( @producto,@existencia,@precio,@proveedor)

GO
/****** Object:  StoredProcedure [dbo].[updatedatos]    Script Date: 22/01/2017 19:42:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



CREATE procedure [dbo].[updatedatos]
@datosId bigint,@producto varchar(80),@existencia int,@precio decimal(18,0),@proveedor varchar(80)
as

update datos set producto =@producto, existencia=@existencia,precio=@precio,proveedor=@proveedor
	where datosId=@datosId

GO
/****** Object:  Table [dbo].[datos]    Script Date: 22/01/2017 19:42:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[datos](
	[datosId] [bigint] IDENTITY(1,1) NOT NULL,
	[producto] [varchar](80) NOT NULL,
	[existencia] [int] NOT NULL,
	[precio] [decimal](18, 0) NOT NULL,
	[proveedor] [varchar](80) NOT NULL,
 CONSTRAINT [PK_datos] PRIMARY KEY CLUSTERED 
(
	[datosId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
