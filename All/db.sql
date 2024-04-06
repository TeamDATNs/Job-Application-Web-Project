/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : SQL Server
 Source Server Version : 16001000 (16.00.1000)
 Source Host           : localhost:1433
 Source Catalog        : Job_Application
 Source Schema         : dbo

 Target Server Type    : SQL Server
 Target Server Version : 16001000 (16.00.1000)
 File Encoding         : 65001

 Date: 14/12/2023 01:04:05
*/


-- ----------------------------
-- Table structure for Account
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[Account]') AND type IN ('U'))
	DROP TABLE [dbo].[Account]
GO

CREATE TABLE [dbo].[Account] (
  [AccountID] int  IDENTITY(1,1) NOT NULL,
  [roleID] int  NULL,
  [Email] nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NOT NULL,
  [Password] nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [Status] bit  NULL
)
GO

ALTER TABLE [dbo].[Account] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of Account
-- ----------------------------
SET IDENTITY_INSERT [dbo].[Account] ON
GO

INSERT INTO [dbo].[Account] ([AccountID], [roleID], [Email], [Password], [Status]) VALUES (N'4', N'2', N'dat05@gmail.com', N'$2a$10$6eNBG4VwHjbxY0s89SR8ve1nSShIFmBsohUgCRcqPILNuyIJJj7R2', N'0')
GO

INSERT INTO [dbo].[Account] ([AccountID], [roleID], [Email], [Password], [Status]) VALUES (N'5', N'3', N'datdo775@gmail.com', N'$2a$10$XS84aMH7drTk4Cg1fg35pOsfeexU9ofgfqOcyRmFBSCX1io3yU9bW', N'1')
GO

SET IDENTITY_INSERT [dbo].[Account] OFF
GO


-- ----------------------------
-- Table structure for ApplyHire
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[ApplyHire]') AND type IN ('U'))
	DROP TABLE [dbo].[ApplyHire]
GO

CREATE TABLE [dbo].[ApplyHire] (
  [ApplyID] int  IDENTITY(1,1) NOT NULL,
  [CandidateID] int  NULL,
  [HiringID] int  NULL,
  [Status] varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[ApplyHire] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of ApplyHire
-- ----------------------------
SET IDENTITY_INSERT [dbo].[ApplyHire] ON
GO

SET IDENTITY_INSERT [dbo].[ApplyHire] OFF
GO


-- ----------------------------
-- Table structure for Candidate
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[Candidate]') AND type IN ('U'))
	DROP TABLE [dbo].[Candidate]
GO

CREATE TABLE [dbo].[Candidate] (
  [CandidateID] int  IDENTITY(1,1) NOT NULL,
  [Fullname] nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [Age] int  NULL,
  [FieldName] nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [Gender] bit  NULL,
  [UniversityOrCollege] nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [City] nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [UploadFileCV] nvarchar(max) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [AccountID] int  NULL,
  [Exp] char(1) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [SKILLS] varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[Candidate] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of Candidate
-- ----------------------------
SET IDENTITY_INSERT [dbo].[Candidate] ON
GO

INSERT INTO [dbo].[Candidate] ([CandidateID], [Fullname], [Age], [FieldName], [Gender], [UniversityOrCollege], [City], [UploadFileCV], [AccountID], [Exp], [SKILLS]) VALUES (N'1', N'Do Phuoc Dat', N'20', N'Technolody', N'0', N'FPT Polytechnic', N'Da Nang', N'148943f1-068b-4445-ae5f-d269000582f7.pdf', N'5', N'2', N'Java, React')
GO

SET IDENTITY_INSERT [dbo].[Candidate] OFF
GO


-- ----------------------------
-- Table structure for ChatRoom
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[ChatRoom]') AND type IN ('U'))
	DROP TABLE [dbo].[ChatRoom]
GO

CREATE TABLE [dbo].[ChatRoom] (
  [ID] int  IDENTITY(1,1) NOT NULL,
  [ChatID] varchar(50) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [SenderID] int  NULL,
  [RecipientID] int  NULL
)
GO

ALTER TABLE [dbo].[ChatRoom] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of ChatRoom
-- ----------------------------
SET IDENTITY_INSERT [dbo].[ChatRoom] ON
GO

SET IDENTITY_INSERT [dbo].[ChatRoom] OFF
GO


-- ----------------------------
-- Table structure for Company
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[Company]') AND type IN ('U'))
	DROP TABLE [dbo].[Company]
GO

CREATE TABLE [dbo].[Company] (
  [CompanyID] int  IDENTITY(1,1) NOT NULL,
  [AccountID] int  NULL,
  [CompanyName] nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [Introduction] nvarchar(1000) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [MainFieldID] int  NULL,
  [Address] nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [Fouding] int  NULL,
  [BusinessEmail] varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [Organizational] varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [PhoneNumber] varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [Avatar] nvarchar(max) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [Cover] nvarchar(max) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[Company] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of Company
-- ----------------------------
SET IDENTITY_INSERT [dbo].[Company] ON
GO

INSERT INTO [dbo].[Company] ([CompanyID], [AccountID], [CompanyName], [Introduction], [MainFieldID], [Address], [Fouding], [BusinessEmail], [Organizational], [PhoneNumber], [Avatar], [Cover]) VALUES (N'1', N'4', N'DPD', N'Chúng tôi là một công ty công nghệ đổi mới, tập trung vào sáng tạo và giải quyết những thách thức phức tạp. Với đội ngũ chuyên gia đa ngành, chúng tôi cam kết mang đến giải pháp hiệu quả và tiên tiến, từ phát triển ứng dụng đến tối ưu hóa hệ thống. Sứ mệnh của chúng tôi là định hình tương lai thông qua công nghệ, đồng hành cùng đối tác để đạt được thành công bền vững và đổi mới liên tục.', NULL, N'hue', N'2020', N'datdo775@gmail.com', N'2000', N'0789444093', N'363ed73c-cc8e-447b-8099-f7c9800c9b51.gif', N'b4c4fe88-a8be-451e-8af8-3d4eedb46252.jpeg')
GO

SET IDENTITY_INSERT [dbo].[Company] OFF
GO


-- ----------------------------
-- Table structure for EmailTokenVeri
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[EmailTokenVeri]') AND type IN ('U'))
	DROP TABLE [dbo].[EmailTokenVeri]
GO

CREATE TABLE [dbo].[EmailTokenVeri] (
  [Token] uniqueidentifier  NOT NULL,
  [CreatedAt] datetime  NOT NULL,
  [ConfirmedAt] datetime  NULL,
  [AccountID] int  NULL
)
GO

ALTER TABLE [dbo].[EmailTokenVeri] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of EmailTokenVeri
-- ----------------------------
INSERT INTO [dbo].[EmailTokenVeri] ([Token], [CreatedAt], [ConfirmedAt], [AccountID]) VALUES (N'64957DF5-CF7B-4941-AE7D-8CEB9B272816', N'2023-12-11 21:10:31.443', N'2023-12-11 21:11:53.000', N'5')
GO


-- ----------------------------
-- Table structure for Hiring
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[Hiring]') AND type IN ('U'))
	DROP TABLE [dbo].[Hiring]
GO

CREATE TABLE [dbo].[Hiring] (
  [HiringID] int  IDENTITY(1,1) NOT NULL,
  [CompanyID] int  NULL,
  [HiringName] nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [ApplicationLimit] int  NULL,
  [DateSubmit] date  NULL,
  [DateEnd] date  NULL,
  [HiringContentID] int  NULL,
  [Status] varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [FieldName] nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [MaxSalary] float(53)  NULL,
  [MinSalary] float(53)  NULL,
  [ErrollmentStatus] varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[Hiring] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of Hiring
-- ----------------------------
SET IDENTITY_INSERT [dbo].[Hiring] ON
GO

INSERT INTO [dbo].[Hiring] ([HiringID], [CompanyID], [HiringName], [ApplicationLimit], [DateSubmit], [DateEnd], [HiringContentID], [Status], [FieldName], [MaxSalary], [MinSalary], [ErrollmentStatus]) VALUES (N'1', N'1', N'Back end - Front end', N'20', N'2023-12-11', N'2023-12-13', N'1', N'Close', N'Java, React', N'2000', N'1000', N'FULL_TIME')
GO

SET IDENTITY_INSERT [dbo].[Hiring] OFF
GO


-- ----------------------------
-- Table structure for HiringContent
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[HiringContent]') AND type IN ('U'))
	DROP TABLE [dbo].[HiringContent]
GO

CREATE TABLE [dbo].[HiringContent] (
  [HiringContentID] int  IDENTITY(1,1) NOT NULL,
  [Title] nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [Content] nvarchar(max) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[HiringContent] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of HiringContent
-- ----------------------------
SET IDENTITY_INSERT [dbo].[HiringContent] ON
GO

INSERT INTO [dbo].[HiringContent] ([HiringContentID], [Title], [Content]) VALUES (N'1', N'Hiring Summer', N'<p style="text-align: center"><span style="font-family: Impact;font-size: 16px">Chuyên Viên Phát Triển Backend và Frontend (Java/ReactJS) - Hãy Tham Gia Cùng Chúng Tôi!</span><br></p><p><strong>Mô Tả Công Việc:</strong></p><p>Chúng tôi đang mở rộng đội ngũ phát triển và đang tìm kiếm ứng viên năng động cho vị trí Chuyên Viên Phát Triển Backend và Frontend. Đây là cơ hội tuyệt vời để bạn tham gia vào môi trường sáng tạo và đầy thách thức.</p><p><strong>Vị Trí:</strong> Chuyên Viên Phát Triển Backend và Frontend</p><p><strong>Địa Điểm:</strong> [Địa điểm công ty]</p><p><strong>Mô Tả Công Việc:</strong></p><ol><li><p><strong>Phát Triển Backend:</strong></p><ul><li>Xây dựng và duy trì hệ thống backend sử dụng Java và framework Spring.</li><li>Tối ưu hóa hiệu suất hệ thống và giải quyết các vấn đề kỹ thuật.</li><li>Tích hợp dữ liệu từ nhiều nguồn và thiết kế các API linh hoạt.</li></ul></li><li><p><strong>Phát Triển Frontend:</strong></p><ul><li>Xây dựng giao diện người dùng tuyệt vời bằng ReactJS.</li><li>Tương tác chặt chẽ với đội ngũ thiết kế để triển khai yêu cầu người dùng.</li><li>Tối ưu hóa trải nghiệm người dùng và đảm bảo tính tương thích đa nền tảng.</li></ul></li></ol><p><strong>Yêu Cầu Công Việc:</strong></p><ol><li><p><strong>Backend:</strong></p><ul><li>Kinh nghiệm vững về Java và framework Spring.</li><li>Hiểu biết chắc chắn về cơ sở dữ liệu và tối ưu hóa truy vấn.</li></ul></li><li><p><strong>Frontend:</strong></p><ul><li>Kinh nghiệm làm việc với ReactJS và các công nghệ liên quan.</li><li>Khả năng làm việc chặt chẽ với đội ngũ thiết kế.</li></ul></li><li><p><strong>Kỹ Năng Chung:</strong></p><ul><li>Kỹ năng giải quyết vấn đề và tư duy logic.</li><li>Khả năng làm việc nhóm và giao tiếp hiệu quả.</li></ul></li></ol><p><strong>Quyền Lợi:</strong></p><ol><li>Mức lương cạnh tranh và chính sách thưởng hấp dẫn.</li><li>Môi trường làm việc năng động và sáng tạo.</li><li>Cơ hội thăng tiến và đào tạo nghề nghiệp</li></ol><p>Nếu bạn đam mê và tự tin rằng bạn có thể đóng góp vào sự thành công của chúng tôi, hãy gửi đơn ứng tuyển và CV của bạn đến [địa chỉ email] trước ngày [hạn cuối]</p>')
GO

SET IDENTITY_INSERT [dbo].[HiringContent] OFF
GO


-- ----------------------------
-- Table structure for MainField
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[MainField]') AND type IN ('U'))
	DROP TABLE [dbo].[MainField]
GO

CREATE TABLE [dbo].[MainField] (
  [MainFieldID] int  IDENTITY(1,1) NOT NULL,
  [FieldName] nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [InfoField] nvarchar(500) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [Achievement] nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [ActiveTime] nvarchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[MainField] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of MainField
-- ----------------------------
SET IDENTITY_INSERT [dbo].[MainField] ON
GO

SET IDENTITY_INSERT [dbo].[MainField] OFF
GO


-- ----------------------------
-- Table structure for Message
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[Message]') AND type IN ('U'))
	DROP TABLE [dbo].[Message]
GO

CREATE TABLE [dbo].[Message] (
  [MessageID] int  IDENTITY(1,1) NOT NULL,
  [ChatRoomID] int  NULL,
  [Content] nvarchar(max) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [CreateAt] datetime  NULL
)
GO

ALTER TABLE [dbo].[Message] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of Message
-- ----------------------------
SET IDENTITY_INSERT [dbo].[Message] ON
GO

SET IDENTITY_INSERT [dbo].[Message] OFF
GO


-- ----------------------------
-- Table structure for Role
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[Role]') AND type IN ('U'))
	DROP TABLE [dbo].[Role]
GO

CREATE TABLE [dbo].[Role] (
  [roleID] int  IDENTITY(1,1) NOT NULL,
  [roleName] varchar(50) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[Role] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of Role
-- ----------------------------
SET IDENTITY_INSERT [dbo].[Role] ON
GO

INSERT INTO [dbo].[Role] ([roleID], [roleName]) VALUES (N'1', N'Admin')
GO

INSERT INTO [dbo].[Role] ([roleID], [roleName]) VALUES (N'2', N'Company')
GO

INSERT INTO [dbo].[Role] ([roleID], [roleName]) VALUES (N'3', N'Candidate')
GO

SET IDENTITY_INSERT [dbo].[Role] OFF
GO


-- ----------------------------
-- Table structure for WishList
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[WishList]') AND type IN ('U'))
	DROP TABLE [dbo].[WishList]
GO

CREATE TABLE [dbo].[WishList] (
  [WishListID] int  IDENTITY(1,1) NOT NULL,
  [CandidateID] int  NULL,
  [HiringID] int  NULL
)
GO

ALTER TABLE [dbo].[WishList] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of WishList
-- ----------------------------
SET IDENTITY_INSERT [dbo].[WishList] ON
GO

SET IDENTITY_INSERT [dbo].[WishList] OFF
GO


-- ----------------------------
-- Auto increment value for Account
-- ----------------------------
DBCC CHECKIDENT ('[dbo].[Account]', RESEED, 5)
GO


-- ----------------------------
-- Uniques structure for table Account
-- ----------------------------
ALTER TABLE [dbo].[Account] ADD CONSTRAINT [UQ__Account__A9D105343D8AC8B8] UNIQUE NONCLUSTERED ([Email] ASC)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table Account
-- ----------------------------
ALTER TABLE [dbo].[Account] ADD CONSTRAINT [PK__Account__349DA586BBD58273] PRIMARY KEY CLUSTERED ([AccountID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Auto increment value for ApplyHire
-- ----------------------------
DBCC CHECKIDENT ('[dbo].[ApplyHire]', RESEED, 1)
GO


-- ----------------------------
-- Primary Key structure for table ApplyHire
-- ----------------------------
ALTER TABLE [dbo].[ApplyHire] ADD CONSTRAINT [PK__ApplyHir__F0687F9105D980D3] PRIMARY KEY CLUSTERED ([ApplyID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Auto increment value for Candidate
-- ----------------------------
DBCC CHECKIDENT ('[dbo].[Candidate]', RESEED, 1)
GO


-- ----------------------------
-- Primary Key structure for table Candidate
-- ----------------------------
ALTER TABLE [dbo].[Candidate] ADD CONSTRAINT [PK__Candidat__DF539BFCE8424A4D] PRIMARY KEY CLUSTERED ([CandidateID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Auto increment value for ChatRoom
-- ----------------------------
DBCC CHECKIDENT ('[dbo].[ChatRoom]', RESEED, 1)
GO


-- ----------------------------
-- Primary Key structure for table ChatRoom
-- ----------------------------
ALTER TABLE [dbo].[ChatRoom] ADD CONSTRAINT [PK__ChatRoom__3214EC27DD8BDA2A] PRIMARY KEY CLUSTERED ([ID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Auto increment value for Company
-- ----------------------------
DBCC CHECKIDENT ('[dbo].[Company]', RESEED, 1)
GO


-- ----------------------------
-- Primary Key structure for table Company
-- ----------------------------
ALTER TABLE [dbo].[Company] ADD CONSTRAINT [PK__Company__2D971C4C9E3BD3A2] PRIMARY KEY CLUSTERED ([CompanyID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table EmailTokenVeri
-- ----------------------------
ALTER TABLE [dbo].[EmailTokenVeri] ADD CONSTRAINT [PK__EmailTok__1EB4F816D40885A8] PRIMARY KEY CLUSTERED ([Token])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Auto increment value for Hiring
-- ----------------------------
DBCC CHECKIDENT ('[dbo].[Hiring]', RESEED, 1)
GO


-- ----------------------------
-- Primary Key structure for table Hiring
-- ----------------------------
ALTER TABLE [dbo].[Hiring] ADD CONSTRAINT [PK__Hiring__B277D84568AB419F] PRIMARY KEY CLUSTERED ([HiringID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Auto increment value for HiringContent
-- ----------------------------
DBCC CHECKIDENT ('[dbo].[HiringContent]', RESEED, 1)
GO


-- ----------------------------
-- Primary Key structure for table HiringContent
-- ----------------------------
ALTER TABLE [dbo].[HiringContent] ADD CONSTRAINT [PK__HiringCo__2C4594F857F367D1] PRIMARY KEY CLUSTERED ([HiringContentID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Auto increment value for MainField
-- ----------------------------
DBCC CHECKIDENT ('[dbo].[MainField]', RESEED, 1)
GO


-- ----------------------------
-- Primary Key structure for table MainField
-- ----------------------------
ALTER TABLE [dbo].[MainField] ADD CONSTRAINT [PK__MainFiel__AD97E9C9EDBA98D6] PRIMARY KEY CLUSTERED ([MainFieldID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Auto increment value for Message
-- ----------------------------
DBCC CHECKIDENT ('[dbo].[Message]', RESEED, 1)
GO


-- ----------------------------
-- Primary Key structure for table Message
-- ----------------------------
ALTER TABLE [dbo].[Message] ADD CONSTRAINT [PK__Message__C87C037CA8BB7700] PRIMARY KEY CLUSTERED ([MessageID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Auto increment value for Role
-- ----------------------------
DBCC CHECKIDENT ('[dbo].[Role]', RESEED, 1001)
GO


-- ----------------------------
-- Primary Key structure for table Role
-- ----------------------------
ALTER TABLE [dbo].[Role] ADD CONSTRAINT [PK__Role__CD98460AF86DA89E] PRIMARY KEY CLUSTERED ([roleID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Auto increment value for WishList
-- ----------------------------
DBCC CHECKIDENT ('[dbo].[WishList]', RESEED, 1)
GO


-- ----------------------------
-- Primary Key structure for table WishList
-- ----------------------------
ALTER TABLE [dbo].[WishList] ADD CONSTRAINT [PK__WishList__E41F87A738C81909] PRIMARY KEY CLUSTERED ([WishListID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Foreign Keys structure for table Account
-- ----------------------------
ALTER TABLE [dbo].[Account] ADD CONSTRAINT [FK__Account__roleID__3A81B327] FOREIGN KEY ([roleID]) REFERENCES [dbo].[Role] ([roleID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO


-- ----------------------------
-- Foreign Keys structure for table ApplyHire
-- ----------------------------
ALTER TABLE [dbo].[ApplyHire] ADD CONSTRAINT [FK__ApplyHire__Candi__5629CD9C] FOREIGN KEY ([CandidateID]) REFERENCES [dbo].[Candidate] ([CandidateID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

ALTER TABLE [dbo].[ApplyHire] ADD CONSTRAINT [FK__ApplyHire__Statu__5535A963] FOREIGN KEY ([HiringID]) REFERENCES [dbo].[Hiring] ([HiringID]) ON DELETE CASCADE ON UPDATE NO ACTION
GO


-- ----------------------------
-- Foreign Keys structure for table Candidate
-- ----------------------------
ALTER TABLE [dbo].[Candidate] ADD CONSTRAINT [FK__Candidate__SKILL__52593CB8] FOREIGN KEY ([AccountID]) REFERENCES [dbo].[Account] ([AccountID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO


-- ----------------------------
-- Foreign Keys structure for table ChatRoom
-- ----------------------------
ALTER TABLE [dbo].[ChatRoom] ADD CONSTRAINT [FK__ChatRoom__Sender__3D5E1FD2] FOREIGN KEY ([SenderID]) REFERENCES [dbo].[Account] ([AccountID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

ALTER TABLE [dbo].[ChatRoom] ADD CONSTRAINT [FK__ChatRoom__Recipi__3E52440B] FOREIGN KEY ([RecipientID]) REFERENCES [dbo].[Account] ([AccountID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO


-- ----------------------------
-- Foreign Keys structure for table Company
-- ----------------------------
ALTER TABLE [dbo].[Company] ADD CONSTRAINT [FK__Company__MainFie__45F365D3] FOREIGN KEY ([MainFieldID]) REFERENCES [dbo].[MainField] ([MainFieldID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

ALTER TABLE [dbo].[Company] ADD CONSTRAINT [FK__Company__Account__46E78A0C] FOREIGN KEY ([AccountID]) REFERENCES [dbo].[Account] ([AccountID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO


-- ----------------------------
-- Foreign Keys structure for table EmailTokenVeri
-- ----------------------------
ALTER TABLE [dbo].[EmailTokenVeri] ADD CONSTRAINT [FK__EmailToke__Accou__49C3F6B7] FOREIGN KEY ([AccountID]) REFERENCES [dbo].[Account] ([AccountID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO


-- ----------------------------
-- Foreign Keys structure for table Hiring
-- ----------------------------
ALTER TABLE [dbo].[Hiring] ADD CONSTRAINT [FK__Hiring__CompanyI__4E88ABD4] FOREIGN KEY ([CompanyID]) REFERENCES [dbo].[Company] ([CompanyID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

ALTER TABLE [dbo].[Hiring] ADD CONSTRAINT [FK__Hiring__HiringCo__4F7CD00D] FOREIGN KEY ([HiringContentID]) REFERENCES [dbo].[HiringContent] ([HiringContentID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO


-- ----------------------------
-- Foreign Keys structure for table Message
-- ----------------------------
ALTER TABLE [dbo].[Message] ADD CONSTRAINT [FK__Message__ChatRoo__412EB0B6] FOREIGN KEY ([ChatRoomID]) REFERENCES [dbo].[ChatRoom] ([ID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO


-- ----------------------------
-- Foreign Keys structure for table WishList
-- ----------------------------
ALTER TABLE [dbo].[WishList] ADD CONSTRAINT [FK__WishList__Candid__59063A47] FOREIGN KEY ([CandidateID]) REFERENCES [dbo].[Candidate] ([CandidateID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

ALTER TABLE [dbo].[WishList] ADD CONSTRAINT [FK__WishList__Hiring__59FA5E80] FOREIGN KEY ([HiringID]) REFERENCES [dbo].[Hiring] ([HiringID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

