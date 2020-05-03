USE [Test]

-- Insert rows into table 'Customers'
INSERT INTO dbo.Users
   ([UserId],[Name],[Mobile],[Email])
VALUES
   ( 1, N'Orlando', N'12342412', N''),
   ( 2, N'Keith', N'124214', N'keith0@adventure-works.com'),
   ( 3, N'Donna', N'124124124', N'donna0@adventure-works.com'),
   ( 4, N'Janet', N'124124124124124', N'janet1@adventure-works.com')
GO