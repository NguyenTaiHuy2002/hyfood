-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2024 at 06:00 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `duanweb_thucphamsach`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `log_login` text DEFAULT NULL,
  `class` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `password`, `phone`, `log_login`, `class`, `address`, `avatar`, `created_at`, `updated_at`) VALUES
(1, 'Admin Tài Huy', 'admin@gmail.com', '$2y$10$knY9hBGE2z52YYMa1dRpIO0J/9KHXey1KCldWLSg45gZQ.knl8t62', '0339372559', NULL, 'DHCNTT06', 'Thịnh Vượng, Lạc Thịnh, Yên Thủy, Hòa Bình', '2024-04-29__cv-1.png', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `a_name` varchar(255) NOT NULL,
  `a_slug` varchar(255) NOT NULL,
  `a_hot` tinyint(4) NOT NULL DEFAULT 0,
  `a_active` tinyint(4) NOT NULL DEFAULT 1,
  `a_menu_id` int(11) NOT NULL DEFAULT 0,
  `a_view` int(11) NOT NULL DEFAULT 0,
  `a_description` mediumtext DEFAULT NULL,
  `a_avatar` varchar(255) DEFAULT NULL,
  `a_content` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `a_position_2` tinyint(4) NOT NULL DEFAULT 0,
  `a_position_1` tinyint(4) NOT NULL DEFAULT 0,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `a_name`, `a_slug`, `a_hot`, `a_active`, `a_menu_id`, `a_view`, `a_description`, `a_avatar`, `a_content`, `created_at`, `a_position_2`, `a_position_1`, `updated_at`) VALUES
(1, 'CÁCH LÀM CÁ BỐNG KHO THỊT BA CHỈ', 'cach-lam-ca-bong-kho-thit-ba-chi', 1, 0, 1, 0, 'Cá bống kho thịt ba chỉ là món ăn dân dã mang đậm bản sắc dân tộc Việt Nam. Từng con cá bống nhỏ nhắn nhưng chắc thịt được bao phủ bởi nước kho đậm đà màu cánh gián, vị cay the của ớt và tiêu hoà trộn vào nước kho rất bắt cơm, ăn bao nhiêu cũng không biết ngán.', '2020-11-21__1.jpg', '<h1>Nguy&ecirc;n liệu</h1>\r\n\r\n<ul>\r\n	<li>\r\n	<h4>C&aacute; bống m&uacute; Ph&uacute; Quốc - 500g</h4>\r\n	</li>\r\n	<li>\r\n	<h4>Thịt ba rọi hữu cơ 500g</h4>\r\n	</li>\r\n	<li>\r\n	<h4>Nước dừa organic đ&oacute;ng hộp Vietcoco</h4>\r\n	</li>\r\n	<li>\r\n	<h4>H&agrave;nh l&aacute; hữu cơ - 100g</h4>\r\n	</li>\r\n	<li>\r\n	<h4>H&agrave;nh T&iacute;m Hữu Cơ - 500g 500gram</h4>\r\n	</li>\r\n	<li>\r\n	<h4>Đường Củ Cải Hữu Cơ Naturata 500g</h4>\r\n	</li>\r\n	<li>\r\n	<h4>Hạt N&ecirc;m Hữu Cơ Rau Củ Alce Nero</h4>\r\n	</li>\r\n	<li>\r\n	<h4>Muối Iot Tự Nhi&ecirc;n Hain 737g</h4>\r\n	</li>\r\n	<li>\r\n	<h4>Ti&ecirc;u Sọ Hữu Cơ Farmer&#39;s Organic 50g</h4>\r\n	</li>\r\n	<li>\r\n	<h4>Nước mắm Ph&uacute; Quốc nh&atilde;n hiệu Quốc Hương loại 750ML</h4>\r\n	</li>\r\n	<li>\r\n	<h4>Ớt hiểm hữu cơ - 100g</h4>\r\n	</li>\r\n</ul>\r\n\r\n<h2>C&aacute;c bước thực hiện</h2>', '2020-11-20 16:44:50', 1, 1, '2024-05-17 19:52:24'),
(6, 'Cách nấu cơm thố thịt gà thơm ngon – không sợ béo', 'cach-nau-com-tho-thit-ga-thom-ngon-khong-so-beo', 1, 1, 4, 0, 'Cách nấu cơm thố với thịt gà hẳn là điều mà nhiều chị em nội trợ quan tâm bởi thịt gà là một trong những thực phẩm nguyên liệu đa dạng về cách chế biến, tạo ra nhiều món ăn với hương vị thơm ngon khác nhau.', '2024-05-11__.jpg', '<h2><strong>1. Chuẩn bị nguy&ecirc;n liệu để nấu m&oacute;n cơm thố thịt g&agrave;&nbsp;</strong></h2>\r\n\r\n<p>C&aacute;ch nấu cơm thố thịt g&agrave; cũng kh&ocirc;ng qu&aacute; kh&oacute; khăn bởi nguy&ecirc;n liệu tạo ra m&oacute;n cũng dễ d&agrave;ng t&igrave;m thấy bất k&igrave; chợ hay si&ecirc;u thị, với những nguy&ecirc;n liệu như sau:</p>\r\n\r\n<p>G&agrave; nguy&ecirc;n con hoặc nửa con t&ugrave;y theo bạn, th&ocirc;ng thường&nbsp;&nbsp;1kg-1.5kg thịt g&agrave; đ&atilde; đủ cho cả nh&agrave; bốn người ăn.&nbsp;</p>\r\n\r\n<p><img alt=\"\" src=\"https://ssl.latcdn.com/img/SksxRp3RH-foody-mobile-anhng1-jpg-478-635894270832288999.jpg\" /></p>\r\n\r\n<p>Gạo thơm, n&ecirc;n chọn loại gạo nấu cơm hạt rời, v&agrave; cơm kh&ocirc;ng qu&aacute; dẻo hạt tr&aacute;nh t&igrave;nh trạng cơm dễ bị ngấy khi nấu cơm thố thịt g&agrave; 350gr-450gr.<br />\r\n100gr Nấm hương, 1 củ h&agrave;nh t&acirc;y, 100ml nước mỡ, 1 muỗng dầu m&egrave;, h&agrave;nh l&aacute;, nước tương, gia vị n&ecirc;m, ng&ograve; r&iacute;. Thứ cần d&ugrave;ng l&agrave; một c&aacute;i nồi đất thể t&iacute;ch 1,5L</p>\r\n\r\n<h2><strong>2. C&aacute;ch thực hiện nấu m&oacute;n cơm thố thịt g&agrave;&nbsp;</strong></h2>\r\n\r\n<p>G&agrave; sau khi mua về lưu &yacute; sơ chế l&agrave;m sạch lại ch&uacute;ng để tr&aacute;nh g&agrave; c&ograve;n s&oacute;t l&ocirc;ng hay vệ sinh kh&ocirc;ng kỹ, tiến h&agrave;nh l&oacute;c thịt g&agrave; khỏi xương rồi chặt kh&uacute;c nhỏ chủ nhật đều nhau rồi ướp thịt cho thấm gia vị. Điều quan trọng trong c&aacute;ch nấu m&oacute;n cơm thố thịt g&agrave; l&agrave; ri&ecirc;ng phần xương đem đi hầm với 1L để l&agrave;m nước nước d&ugrave;ng cho nấu cơm</p>\r\n\r\n<p>Gạo được vo sạch, để r&aacute;o nước.</p>\r\n\r\n<p>Nấm ng&acirc;m nước cắt sợi, h&agrave;nh t&acirc;y th&aacute;i mỏng để sẵn.</p>\r\n\r\n<p>Đặt chảo l&ecirc;n bếp, cho mỡ v&agrave;o phi tỏi thơm. Tr&uacute;t thịt v&agrave; l&ograve;ng g&agrave; v&agrave;o x&agrave;o ch&iacute;n. Cho nấm hương, củ h&agrave;nh t&acirc;y, h&agrave;nh l&aacute; cắt kh&uacute;c v&agrave;o trộn đều với dầu m&egrave;, nước tương. N&ecirc;m gia vị vừa ăn.</p>\r\n\r\n<p><img alt=\"\" src=\"https://ssl.latcdn.com/img/rJLG0T3CS-img20151007124605933.jpg\" /></p>\r\n\r\n<p>Khi mọi thứ đ&atilde; sẵn s&agrave;ng chỉ việc c&ograve;n lại chỉ cần cho gạo v&agrave;o thố cho nước d&ugrave;ng đ&atilde; hầm bằng xương g&agrave; v&agrave;o trong thố c&oacute; gạo chuyển v&agrave;o sao cho nước sấp mặt gạo khoảng 1.7-2.2 cm t&ugrave;y theo từng loại gạo. Rồi chuyển ch&uacute;ng v&agrave;o&nbsp;tủ nấu cơm&nbsp;Như vậy l&agrave; bạn đ&atilde; ho&agrave;n th&agrave;nh c&aacute;c bước trong c&aacute;ch nấu cơm thố với thịt g&agrave; rồi đ&oacute;.</p>\r\n\r\n<p>Nếu bạn chỉ nấu cơm cho cả gia đ&igrave;nh th&igrave; chỉ cần một tủ nấu cơm<strong><a href=\"https://tunaucom.net/danh-muc-san-pham/tu-nau-com-dien-va-gas/\" rel=\"noopener noreferrer\" target=\"_blank\">&nbsp;</a></strong>nhỏ l&agrave; đủ cho cả gia đ&igrave;nh, nhưng nếu bạn mong muốn kinh doanh bằng c&aacute;i m&oacute;n lạ m&agrave; hấp dẫn n&agrave;y th&igrave; một c&aacute;i tủ nấu cơm&nbsp;l&agrave; rất cần thiết, n&oacute; đ&aacute;p ứng đủ c&ocirc;ng xuất.</p>\r\n\r\n<h2><strong>3. C&ocirc;ng đoạn cuối c&ugrave;ng trong c&aacute;ch nấu m&oacute;n cơm thố</strong></h2>\r\n\r\n<p>Khi cơm ch&iacute;n, trải thịt g&agrave; phủ k&iacute;n cơm, chuyển v&agrave;o tủ nấu cơm<strong><a href=\"https://maycatthit.info/tu-nau-com-cong-nghiep\" rel=\"noopener noreferrer\" target=\"_blank\">&nbsp;</a></strong>hấp th&ecirc;m 15 ph&uacute;t nữa cho n&oacute;ng. Dọn cơm trong thố, rải ng&ograve; l&ecirc;n mặt cơm ăn k&egrave;m với nước tương pha ngọt th&ecirc;m một ch&uacute;t ớt xắt khoanh để tạo th&ecirc;m hương vị cho m&oacute;n ăn th&ecirc;m đậm đ&agrave;.</p>\r\n\r\n<div class=\"ddict_btn\" style=\"left:398.344px; top:1427px\"><img src=\"chrome-extension://bpggmmljdiliancllaapiggllnkbjocb/logo/48.png\" /></div>', '2024-05-11 09:31:49', 0, 0, '2024-05-11 10:29:58');

-- --------------------------------------------------------

--
-- Table structure for table `attributes`
--

CREATE TABLE `attributes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `atb_name` varchar(255) NOT NULL,
  `atb_slug` varchar(255) NOT NULL,
  `atb_type_id` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `attributes`
--

INSERT INTO `attributes` (`id`, `atb_name`, `atb_slug`, `atb_type_id`, `created_at`, `updated_at`) VALUES
(1, '500 gram', '500-gram', 1, '2020-11-20 16:45:10', '2020-11-20 16:45:10'),
(2, '1 Kg', '1-kg', 1, '2020-11-20 16:45:10', '2020-11-20 16:45:10'),
(3, '2 Kg', '2-kg', 1, '2020-11-20 16:45:10', '2020-11-20 16:45:10'),
(4, '250 gram', '250-gram', 1, '2020-11-20 16:45:10', '2020-11-20 16:45:10'),
(5, '300 gram', '300-gram', 1, '2020-11-20 16:45:10', '2020-11-20 16:45:10'),
(6, 'Gói', 'goi', 2, '2020-11-20 16:45:10', '2020-11-20 16:45:10'),
(7, 'Hộp', 'hop', 2, '2020-11-20 16:45:10', '2020-11-20 16:45:10'),
(8, 'Thùng', 'thung', 2, '2020-11-20 16:45:10', '2020-11-20 16:45:10');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `c_name` varchar(255) NOT NULL,
  `c_parent_id` int(11) NOT NULL DEFAULT 0,
  `c_slug` varchar(255) NOT NULL,
  `c_avatar` varchar(255) DEFAULT NULL,
  `c_banner` varchar(255) DEFAULT NULL,
  `c_description` varchar(255) DEFAULT NULL,
  `c_hot` tinyint(4) NOT NULL DEFAULT 0,
  `c_status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `c_name`, `c_parent_id`, `c_slug`, `c_avatar`, `c_banner`, `c_description`, `c_hot`, `c_status`, `created_at`, `updated_at`) VALUES
(1, 'Nước uống', 0, 'nuoc-uong', '2020-11-20__raucuqua.png', NULL, NULL, 1, 1, '2023-03-20 16:45:26', '2024-04-28 10:22:46'),
(22, 'Trà sữa', 0, 'tra-sua', '2024-04-06__tra-sua-chan-chau-den.jpeg', NULL, NULL, 1, 1, '2024-04-06 09:51:25', '2024-04-06 09:52:04'),
(23, 'cơm', 0, 'com', '2024-04-28__.jpg', NULL, NULL, 1, 1, '2024-04-06 09:51:38', '2024-04-28 02:23:04'),
(24, 'Bún', 0, 'bun', NULL, NULL, NULL, 1, 1, '2024-04-06 09:51:44', '2024-04-06 09:52:08'),
(25, 'Nem', 0, 'nem', NULL, NULL, NULL, 1, 1, '2024-04-06 09:51:49', '2024-04-06 09:52:11'),
(26, 'Đồ ăn vặt', 0, 'do-an-vat', NULL, NULL, NULL, 1, 1, '2024-04-06 09:51:59', '2024-04-28 04:43:29');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cmt_name` varchar(255) DEFAULT NULL,
  `cmt_email` varchar(255) DEFAULT NULL,
  `cmt_content` text DEFAULT NULL,
  `cmt_parent_id` int(11) NOT NULL DEFAULT 0,
  `cmt_product_id` int(11) NOT NULL DEFAULT 0,
  `cmt_admin_id` int(11) NOT NULL DEFAULT 0,
  `cmt_user_id` int(11) NOT NULL DEFAULT 0,
  `cmt_like` int(11) NOT NULL DEFAULT 0,
  `cmt_disk_like` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `cmt_name`, `cmt_email`, `cmt_content`, `cmt_parent_id`, `cmt_product_id`, `cmt_admin_id`, `cmt_user_id`, `cmt_like`, `cmt_disk_like`, `created_at`, `updated_at`) VALUES
(1, NULL, NULL, 'Sản phẩm rất tuyệt vời', 0, 11, 0, 2, 0, 0, '2020-11-20 16:45:44', '2020-11-20 16:45:44'),
(2, NULL, NULL, '@Nguyen Quang Duc: cám ơn shop', 1, 11, 0, 2, 0, 0, '2020-11-20 16:45:44', '2020-11-20 16:45:44'),
(5, NULL, NULL, 'sản phẩm này còn hàng không ?', 0, 10, 0, 35, 0, 0, '2022-01-07 15:17:59', NULL),
(6, NULL, NULL, '@Minh Lan: còn ạ', 5, 10, 0, 35, 0, 0, '2022-01-07 15:18:28', NULL),
(7, NULL, NULL, 'Sản phẩm này rất tốt', 0, 14, 0, 41, 0, 0, '2022-01-08 08:53:44', NULL),
(8, NULL, NULL, '4343', 0, 28, 0, 43, 0, 0, '2024-05-14 18:11:15', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `c_title` varchar(255) DEFAULT NULL,
  `c_phone` char(11) DEFAULT NULL,
  `c_email` varchar(255) DEFAULT NULL,
  `c_content` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `c_title`, `c_phone`, `c_email`, `c_content`, `created_at`, `updated_at`) VALUES
(2, 'phản hồi', '0359372559', 'huyteo559@gmail.com', 'aaa', '2024-05-11 10:58:47', NULL),
(3, 'phản hồi', '0359372559', 'huyteo559@gmail.com', 'tốt lắm', '2024-05-17 05:56:33', NULL),
(4, '1', '1', '1@gmail.com', '1', '2024-05-17 11:28:44', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `discount_code`
--

CREATE TABLE `discount_code` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `d_code` varchar(191) NOT NULL,
  `d_number_code` int(11) NOT NULL DEFAULT 0,
  `d_date_start` datetime DEFAULT NULL,
  `d_date_end` datetime DEFAULT NULL,
  `d_percentage` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `e_name` varchar(255) DEFAULT NULL,
  `e_banner` varchar(255) DEFAULT NULL,
  `e_link` varchar(255) DEFAULT NULL,
  `e_position_1` tinyint(4) NOT NULL DEFAULT 0,
  `e_position_2` tinyint(4) NOT NULL DEFAULT 0,
  `e_position_3` tinyint(4) NOT NULL DEFAULT 0,
  `e_position_4` tinyint(4) NOT NULL DEFAULT 0,
  `e_detail_1` tinyint(4) NOT NULL DEFAULT 0,
  `e_detail_2` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `e_name`, `e_banner`, `e_link`, `e_position_1`, `e_position_2`, `e_position_3`, `e_position_4`, `e_detail_1`, `e_detail_2`, `created_at`, `updated_at`) VALUES
(1, 'sale 1', '2024-04-07__sub-banner-1.jpg', '/', 1, 0, 0, 0, 0, 0, '2024-04-06 17:00:18', '2024-04-06 17:00:18'),
(2, 'sale 2', '2024-04-06__1650634131-slideshow-34c33.jpg', '/', 0, 1, 0, 0, 0, 0, '2024-04-06 16:01:22', '2024-04-06 16:01:22'),
(3, 'sale 3', '2024-04-07__sub-banner-2.jpg', '/', 0, 0, 1, 0, 0, 0, '2024-04-06 17:00:38', '2024-04-06 17:00:38'),
(4, 'sale 4', '2020-11-21__cong-thuc-banner.jpg', '/', 0, 0, 0, 0, 1, 0, '2020-11-21 04:02:56', '2020-11-21 04:02:56'),
(5, 'sale 5', '2020-11-21__follow-nhan-uu-dai.jpg', '/', 0, 0, 0, 0, 0, 1, '2020-11-21 04:02:48', '2020-11-21 04:02:48');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `keywords`
--

CREATE TABLE `keywords` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `k_name` varchar(255) NOT NULL,
  `k_slug` varchar(255) NOT NULL,
  `k_description` varchar(255) DEFAULT NULL,
  `k_hot` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `keywords`
--

INSERT INTO `keywords` (`id`, `k_name`, `k_slug`, `k_description`, `k_hot`, `created_at`, `updated_at`) VALUES
(1, 'Thực phẩm sạch', 'thuc-pham-sach', NULL, 0, '2020-11-20 16:46:28', '2020-11-20 16:46:28'),
(2, 'Rau quả hữu cơ', 'rau-qua-huu-co', NULL, 0, '2020-11-20 16:46:28', '2020-11-20 16:46:28'),
(3, 'Thực phẩm sạch vietgap', 'thuc-pham-sach-vietgap', NULL, 0, '2020-11-20 16:46:28', '2020-11-20 16:46:28'),
(4, 'Thực phẩm vietfoods', 'thuc-pham-vietfoods', NULL, 0, '2020-11-20 16:46:28', '2020-11-20 16:46:28'),
(5, 'Organicfood', 'organicfood', NULL, 0, '2020-11-20 16:46:28', '2020-11-20 16:46:28');

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `mn_name` varchar(255) NOT NULL,
  `mn_slug` varchar(255) NOT NULL,
  `mn_avatar` varchar(255) DEFAULT NULL,
  `mn_banner` varchar(255) DEFAULT NULL,
  `mn_description` varchar(255) DEFAULT NULL,
  `mn_hot` tinyint(4) NOT NULL DEFAULT 0,
  `mn_status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `mn_name`, `mn_slug`, `mn_avatar`, `mn_banner`, `mn_description`, `mn_hot`, `mn_status`, `created_at`, `updated_at`) VALUES
(1, 'Tin tức mới', 'tin-tuc-moi', NULL, NULL, NULL, 0, 1, '2020-11-20 16:46:44', '2020-11-20 16:46:44'),
(2, 'Sự Kiện', 'su-kien', NULL, NULL, NULL, 0, 1, '2020-11-20 16:46:44', '2020-11-20 16:46:44'),
(3, 'Tin nổi bậc', 'tin-noi-bac', NULL, NULL, NULL, 0, 1, '2022-01-07 15:06:11', NULL),
(4, 'Tin Xem Nhiều', 'tin-xem-nhieu', NULL, NULL, NULL, 0, 1, '2022-01-08 08:54:36', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2018_02_02_041429_create_categories_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2020_02_02_155318_create_keywords_table', 1),
(5, '2020_02_03_145303_create_products_table', 1),
(6, '2020_02_06_165057_create_attributes_table', 1),
(7, '2020_02_06_184708_create_products_attributes_table', 1),
(8, '2020_02_08_005029_add_multiple_column_attribute_in_table_products', 1),
(9, '2020_02_09_073958_create_transactions_table', 1),
(10, '2020_02_09_074025_create_orders_table', 1),
(11, '2020_02_09_133309_create_products_keywords_table', 1),
(12, '2020_02_09_155308_create_admins_table', 1),
(13, '2020_02_09_180519_create_menus_table', 1),
(14, '2020_02_09_180620_create_articles_table', 1),
(15, '2020_02_12_100000_create_password_resets_table', 1),
(16, '2020_02_13_154148_alter_column_pro_number_in_table_product', 1),
(17, '2020_02_13_171036_create_slides_table', 1),
(18, '2020_02_14_121248_alter_column_a_position_in_table_articles', 1),
(19, '2020_02_15_053225_create_user_favourite_table', 1),
(20, '2020_02_15_191555_create_ratings_table', 1),
(21, '2020_02_17_162605_create_events_table', 1),
(22, '2020_02_18_152103_create_product_images_table', 1),
(23, '2020_02_24_222836_create_social_accounts_table', 1),
(24, '2020_03_08_104810_create_statics_table', 1),
(25, '2020_03_08_213403_alter_column_pro_age_review_in_table_product', 1),
(26, '2020_03_12_205704_create_contacts_table', 1),
(27, '2020_03_17_183239_create_comments_table', 1),
(28, '2020_03_22_003200_alter_column_spam_comment_ratings_in_table_users', 1),
(29, '2020_03_23_223714_alter_column_admin_in_table_admin', 1),
(30, '2020_04_09_231820_create_producer_table', 1),
(31, '2020_04_11_010440_create_types_table', 1),
(32, '2021_03_14_204259_create_discount_code_table', 2),
(33, '2021_03_30_105937_create_payments_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `momo`
--

CREATE TABLE `momo` (
  `id` int(11) NOT NULL,
  `partnerCode` varchar(50) NOT NULL,
  `orderId` varchar(50) NOT NULL,
  `requestId` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL,
  `orderInfo` varchar(50) NOT NULL,
  `orderType` varchar(50) NOT NULL,
  `transId` varchar(50) NOT NULL,
  `resultCode` varchar(50) NOT NULL,
  `payType` varchar(50) NOT NULL,
  `signature` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `momo`
--

INSERT INTO `momo` (`id`, `partnerCode`, `orderId`, `requestId`, `amount`, `orderInfo`, `orderType`, `transId`, `resultCode`, `payType`, `signature`) VALUES
(1, 'MOMOBKUN20180529', '32189', '1715628702', '113490', 'Thanh toán qua MoMo', 'momo_wallet', '4041698734', '0', 'napas', '62b1cd699a84fc3a7af690f3cb07b4abc6e141cc4c4be2645f'),
(3, 'MOMOBKUN20180529', '76472', '1715630985', '75660', 'Thanh toán qua MoMo', 'momo_wallet', '4041740940', '0', 'napas', '48c460b1a922871a9727689a99ed836709771024d9fe8bdf24'),
(4, 'MOMOBKUN20180529', '83743', '1715631901', '75660', 'Thanh toán qua MoMo', 'momo_wallet', '4041724853', '0', 'napas', 'a28eef1d8d3bc2bf9b4a1f29cc92ea8ec137f63349eafeef8e'),
(5, 'MOMOBKUN20180529', '83743', '1715631901', '75660', 'Thanh toán qua MoMo', 'momo_wallet', '4041724853', '0', 'napas', 'a28eef1d8d3bc2bf9b4a1f29cc92ea8ec137f63349eafeef8e');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `od_transaction_id` int(11) NOT NULL DEFAULT 0,
  `od_product_id` int(11) NOT NULL DEFAULT 0,
  `od_sale` int(11) NOT NULL DEFAULT 0,
  `od_qty` tinyint(4) NOT NULL DEFAULT 0,
  `od_price` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `od_transaction_id`, `od_product_id`, `od_sale`, `od_qty`, `od_price`, `created_at`, `updated_at`) VALUES
(8, 10, 11, 0, 1, 33000, NULL, NULL),
(9, 10, 9, 0, 1, 42000, NULL, NULL),
(10, 10, 8, 0, 1, 65000, NULL, NULL),
(11, 11, 11, 0, 1, 33000, NULL, NULL),
(12, 11, 8, 0, 1, 65000, NULL, NULL),
(13, 12, 9, 0, 3, 42000, NULL, NULL),
(14, 12, 10, 0, 2, 16000, NULL, NULL),
(15, 13, 10, 0, 4, 16000, NULL, NULL),
(16, 14, 7, 0, 1, 33000, NULL, NULL),
(17, 14, 9, 0, 1, 42000, NULL, NULL),
(18, 15, 15, 8, 1, 55200, NULL, NULL),
(19, 16, 17, 8, 1, 41400, NULL, NULL),
(20, 16, 18, 3, 1, 36860, NULL, NULL),
(21, 16, 18, 3, 3, 36860, NULL, NULL),
(22, 16, 16, 2, 1, 41160, NULL, NULL),
(23, 17, 20, 4, 1, 48000, NULL, NULL),
(24, 17, 28, 3, 2, 37830, NULL, NULL),
(25, 17, 18, 3, 1, 36860, NULL, NULL),
(27, 19, 28, 3, 1, 37830, NULL, NULL),
(31, 23, 28, 3, 4, 37830, NULL, NULL),
(32, 24, 28, 3, 1, 37830, NULL, NULL),
(34, 36, 18, 3, 2, 36860, NULL, NULL),
(35, 37, 18, 3, 1, 36860, NULL, NULL),
(36, 38, 16, 2, 1, 41160, NULL, NULL),
(37, 39, 18, 3, 1, 36860, NULL, NULL),
(39, 44, 25, 4, 2, 52800, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('duocnvoit@gmail.com', '$2y$10$pbrzwKceNbJ/t6ay5uJODOz4bweHblK6bPysnuctlVyCFO58YkoSq', '2020-05-03 15:29:08'),
('taihuy@gmail.com', '$2y$10$oe1dPL6TXzymUJ5TIY2g4.qZgqA3kcABA/zdeKmQooqgKrHNeV.HW', '2024-04-13 06:50:41'),
('taihuy@gmail.com', '$2y$10$l7fKBxLJrSmLOUEzzbnHuuMVPD9dLs1e.UuyvFQJBM81pXpPp8Sc.', '2024-04-13 06:51:21'),
('taihuy@gmail.com', '$2y$10$tnONzVGD4CjYO5FiHyJF7uQfAFvkV/qy7TvoNcPDtRUvy9LfGOazK', '2024-04-14 16:34:08'),
('taihuy@gmail.com', '$2y$10$/7VWHCffxuIsbYmV/zPWpOzswVNksQx8NMXWSQuMhllcJ7wH.iS9u', '2024-05-09 10:45:55'),
('nguyentaihuy02@gmail.com', '$2y$10$Uko43LHSSLM22Fto9vsPlu3Ut20kzMEFC2qXsyrLvq2l0mj5.nzvS', '2024-05-09 10:51:01'),
('nguyentaihuy02@gmail.com', '$2y$10$JckyJLROxojbeFLROz3FyOIjYQy9DgLS6eVvDKgXwIlyIuiEXdXSO', '2024-05-09 11:33:11'),
('taihuy@gmail.com', '$2y$10$b/gb9YqH5wq9xSyz1kW6fOTU9BDlv3gTHmQgavMW0tptapw0HI.bW', '2024-05-10 17:24:37'),
('taihuy@gmail.com', '$2y$10$yXHfzZQq2bWdU5fu8RwtZu8vqz9R7ViJJuNtfD7DVQQJqZp3YSkm6', '2024-05-10 17:27:34'),
('taihuy@gmail.com', '$2y$10$9gXZySrD91nIsd7ACgchBOeredNyBeSIxPk.va8Bog2w/5byrh6gO', '2024-05-11 03:27:50'),
('huyteo559@gmail.com', '$2y$10$4nmrPmSRC9B3OUBvgDxaVOlVcI1uXGkpuoUB3QdbmevCEwOQSt0UW', '2024-05-11 07:00:56'),
('huyteo559@gmail.com', '$2y$10$qEwb8tbmG8Nij8nHZ4vTMej3D7/pCkUdvBjTJDH9.SNWnIUkIt84S', '2024-05-20 10:48:49');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `p_transaction_id` int(11) DEFAULT NULL,
  `p_user_id` int(11) DEFAULT NULL,
  `p_money` double(8,2) DEFAULT NULL COMMENT 'Số tiền thanh toán',
  `p_note` varchar(191) DEFAULT NULL COMMENT 'Nội dung thanh toán',
  `p_transaction_code` varchar(191) NOT NULL,
  `p_vnp_response_code` varchar(255) DEFAULT NULL COMMENT 'Mã phản hồi',
  `p_code_vnpay` varchar(255) DEFAULT NULL COMMENT 'Mã giao dịch vnpay',
  `p_code_bank` varchar(255) DEFAULT NULL COMMENT 'Mã ngân hàng',
  `p_time` datetime DEFAULT NULL COMMENT 'Thời gian chuyển khoản',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `p_transaction_id`, `p_user_id`, `p_money`, `p_note`, `p_transaction_code`, `p_vnp_response_code`, `p_code_vnpay`, `p_code_bank`, `p_time`, `created_at`, `updated_at`) VALUES
(1, 36, 43, 73720.00, 'dfsf', '94404', '00', '14413918', 'NCB', '2024-05-14 13:50:00', NULL, NULL),
(2, 37, 43, 36860.00, '1234', '11551', '00', '14413938', 'NCB', '2024-05-14 14:00:00', NULL, NULL),
(3, 38, 43, 41160.00, 'thanh toán', '41524', '00', '14414090', 'NCB', '2024-05-14 15:08:00', NULL, NULL),
(4, 39, 48, 36860.00, '123', '18571', '00', '14414152', 'NCB', '2024-05-14 15:28:00', NULL, NULL),
(5, 41, 43, 48500.00, '123', '61276', '00', '14416346', 'NCB', '2024-05-16 01:33:00', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `producer`
--

CREATE TABLE `producer` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `pdr_name` varchar(255) NOT NULL,
  `pdr_slug` varchar(255) NOT NULL,
  `pdr_email` varchar(100) NOT NULL,
  `pdr_phone` varchar(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `producer`
--

INSERT INTO `producer` (`id`, `pdr_name`, `pdr_slug`, `pdr_email`, `pdr_phone`, `created_at`, `updated_at`) VALUES
(1, 'Nông sản nhật bản', 'nong-san-nhat-ban', 'nongsannhat@gmail.com', '19001907', '2020-11-20 16:47:15', '2020-11-20 16:47:15'),
(2, 'Hợ tác xã nông sản sạch', 'ho-tac-xa-nong-san-sach', 'hoptacnongsansach@gmail.com', '18008989', '2020-11-20 16:47:15', '2020-11-20 16:47:15'),
(3, 'Everyday Organic', 'everyday-organic', 'everydayorganic@gmail.com', '028 38 753 443', '2020-11-20 16:47:15', '2020-11-20 16:47:15'),
(4, 'Organicfood.vn', 'organicfoodvn', 'organicfood@gmail.com', '0928817228', '2020-11-20 16:47:15', '2020-11-20 16:47:15'),
(5, 'Thực phẩm sạch VietGrap', 'thuc-pham-sach-vietgrap', 'vietgap@fsi.org.vn', '02436341933', '2020-11-20 16:47:15', '2020-11-20 16:47:15'),
(6, 'Thực phẩm sạch vietfoods', 'thuc-pham-sach-vietfoods', 'vietfoods@gmail.com', '0243201075', '2020-11-20 16:47:15', '2020-11-20 16:47:15'),
(7, 'Acicook Mi hảo Hảo', 'acicook-mi-hao-hao', 'haohao@gmail.com', '03764641313', '2022-01-07 14:57:27', '2022-01-07 14:59:50'),
(8, 'Omachi', 'omachi', 'congtyomachi@gmail.com', '0333333333', '2022-01-08 08:48:57', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `pro_name` varchar(255) DEFAULT NULL,
  `pro_slug` varchar(255) NOT NULL,
  `pro_price` int(11) NOT NULL DEFAULT 0,
  `pro_price_entry` int(11) NOT NULL DEFAULT 0 COMMENT 'giá nhập',
  `pro_category_id` int(11) NOT NULL DEFAULT 0,
  `pro_admin_id` int(11) NOT NULL DEFAULT 0,
  `pro_sale` tinyint(4) NOT NULL DEFAULT 0,
  `pro_avatar` varchar(255) DEFAULT NULL,
  `pro_view` int(11) NOT NULL DEFAULT 0,
  `pro_hot` tinyint(4) NOT NULL DEFAULT 0,
  `pro_active` tinyint(4) NOT NULL DEFAULT 1,
  `pro_pay` int(11) NOT NULL DEFAULT 0,
  `pro_description` mediumtext DEFAULT NULL,
  `pro_content` text DEFAULT NULL,
  `pro_review_total` int(11) NOT NULL DEFAULT 0,
  `pro_review_star` int(11) NOT NULL DEFAULT 0,
  `pro_age_review` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `pro_number` int(11) NOT NULL DEFAULT 0,
  `pro_country` tinyint(4) NOT NULL DEFAULT 0,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `pro_name`, `pro_slug`, `pro_price`, `pro_price_entry`, `pro_category_id`, `pro_admin_id`, `pro_sale`, `pro_avatar`, `pro_view`, `pro_hot`, `pro_active`, `pro_pay`, `pro_description`, `pro_content`, `pro_review_total`, `pro_review_star`, `pro_age_review`, `created_at`, `pro_number`, `pro_country`, `updated_at`) VALUES
(16, 'Cơm rang dưa bò', 'com-rang-dua-bo', 42000, 0, 23, 0, 2, '2024-04-06__.jpg', 21, 0, 1, 2, '<p>Cơm rang dưa b&ograve; l&agrave; một m&oacute;n ăn phổ biến trong ẩm thực Việt Nam. M&oacute;n n&agrave;y kết hợp giữa cơm trắng, dưa b&ograve; v&agrave; c&aacute;c loại gia vị để tạo n&ecirc;n một m&oacute;n ăn ngon v&agrave; đa dạng về hương vị.</p>', '<h2><strong>Cơm rang dưa b&ograve; - M&oacute;n ăn hấp dẫn v&agrave; đậm đ&agrave;</strong></h2>\r\n\r\n<p>Cơm rang dưa b&ograve; l&agrave; một m&oacute;n ăn phổ biến trong ẩm thực Việt Nam. M&oacute;n n&agrave;y kết hợp giữa cơm trắng, dưa b&ograve;, v&agrave; c&aacute;c loại gia vị để tạo n&ecirc;n một m&oacute;n ăn ngon v&agrave; đa dạng về hương vị.</p>\r\n\r\n<p>Để chuẩn bị cơm rang dưa b&ograve;, đầu ti&ecirc;n, cơm trắng được nấu ch&iacute;n hoặc sử dụng lại cơm c&ograve;n thừa từ bữa trước. Cơm sau đ&oacute; được l&agrave;m mềm v&agrave; r&aacute;o nước để sử dụng cho qu&aacute; tr&igrave;nh rang.</p>\r\n\r\n<p>Dưa b&ograve;, hay c&ograve;n được gọi l&agrave; dưa muối, l&agrave; loại dưa chua được l&agrave;m từ quả dưa ch&iacute;n v&agrave; được muối ủ. Dưa b&ograve; c&oacute; vị chua m&aacute;t, gi&ograve;n v&agrave; hương thơm đặc trưng. Trước khi sử dụng, dưa b&ograve; được th&aacute;i nhỏ v&agrave; sẵn s&agrave;ng để trộn chung với cơm rang.</p>\r\n\r\n<p>Trong qu&aacute; tr&igrave;nh rang cơm, c&aacute;c nguy&ecirc;n liệu kh&aacute;c như h&agrave;nh, tỏi, thịt b&ograve;, rau củ, v&agrave; trứng c&oacute; thể được th&ecirc;m v&agrave;o để tạo th&ecirc;m hương vị v&agrave; chất dinh dưỡng. Thịt b&ograve; thường được th&aacute;i mỏng v&agrave; chi&ecirc;n nhanh để giữ độ mềm v&agrave; gi&ograve;n. Rau củ như h&agrave;nh l&aacute;, c&agrave; rốt, bắp cải cũng thường được th&ecirc;m v&agrave;o để tăng th&ecirc;m m&agrave;u sắc v&agrave; độ tươi m&aacute;t cho m&oacute;n ăn.</p>', 2, 8, 4, '2023-04-17 09:00:17', 0, 0, '2024-04-06 14:58:38'),
(17, 'Bún Cá Hải Phòng', 'bun-ca-hai-phong', 45000, 0, 24, 0, 8, '2024-04-06__1711698829-product-bun-ca-cay.jpg', 16, 0, 1, 1, '<p>B&uacute;n c&aacute; Hải Ph&ograve;ng l&agrave; một m&oacute;n ăn đặc trưng của Hải Ph&ograve;ng, gồm b&uacute;n tươi, miếng c&aacute; chi&ecirc;n gi&ograve;n v&agrave; nước d&ugrave;ng từ c&aacute; thơm ngon. Hương vị đậm đ&agrave; v&agrave; sự kết hợp với rau sống tạo n&ecirc;n một m&oacute;n b&uacute;n ngon v&agrave; độc đ&aacute;o.</p>\r\n\r\n<div class=\"ddict_btn\" style=\"left:618.891px; top:24px\"><img src=\"chrome-extension://bpggmmljdiliancllaapiggllnkbjocb/logo/48.png\" /></div>', '<p>&nbsp;</p>\r\n\r\n<h2><strong>B&uacute;n C&aacute; Hải Ph&ograve;ng - M&oacute;n ăn đặc trưng của Hải Ph&ograve;ng</strong></h2>\r\n\r\n<p>B&uacute;n C&aacute; Hải Ph&ograve;ng l&agrave; một m&oacute;n ăn truyền thống đặc trưng của th&agrave;nh phố Hải Ph&ograve;ng, nằm ở miền Bắc Việt Nam. M&oacute;n ăn n&agrave;y kết hợp giữa b&uacute;n tươi, nước d&ugrave;ng từ c&aacute; v&agrave; c&aacute;c th&agrave;nh phần ch&iacute;nh l&agrave; c&aacute; chi&ecirc;n gi&ograve;n v&agrave; thịt c&aacute; băm nhuyễn.</p>\r\n\r\n<p>Đặc điểm nổi bật của B&uacute;n C&aacute; Hải Ph&ograve;ng l&agrave; hương vị đậm đ&agrave;, thơm ngon v&agrave; hấp dẫn. B&uacute;n tươi mềm mịn được chế biến kỹ lưỡng, tạo cảm gi&aacute;c nhai ngon v&agrave; dễ ti&ecirc;u h&oacute;a. Nước d&ugrave;ng từ c&aacute; được nấu từ xương c&aacute; v&agrave; gia vị tự nhi&ecirc;n, tạo n&ecirc;n hương vị đậm đ&agrave;, thấm ngấm v&agrave;o từng sợi b&uacute;n.</p>\r\n\r\n<div class=\"ddict_btn\" style=\"left:630.578px; top:24px\"><img src=\"chrome-extension://bpggmmljdiliancllaapiggllnkbjocb/logo/48.png\" /></div>', 2, 6, 3, '2023-04-17 09:12:33', 1, 2, '2024-05-15 17:54:26'),
(18, 'Bún Đậu Mắm Tôm', 'bun-dau-mam-tom', 38000, 0, 24, 0, 3, '2024-04-06__1711736464-product-bun-dau-mam-tom.jpeg', 19, 0, 1, 4, '<p>B&uacute;n đậu mắm t&ocirc;m l&agrave; một m&oacute;n ăn truyền thống v&agrave; phổ biến trong ẩm thực Việt Nam. M&oacute;n ăn n&agrave;y kết hợp giữa b&uacute;n tươi, đậu hũ non, c&aacute;c loại rau sống v&agrave; mắm t&ocirc;m đặc trưng.</p>', '<h2>B&uacute;n đậu mắm t&ocirc;m - M&oacute;n ăn truyền thống đậm chất Việt</h2>\r\n\r\n<p>B&uacute;n đậu mắm t&ocirc;m l&agrave; một m&oacute;n ăn truyền thống v&agrave; phổ biến trong ẩm thực Việt Nam. M&oacute;n ăn n&agrave;y kết hợp giữa b&uacute;n tươi, đậu hũ non, c&aacute;c loại rau sống v&agrave; mắm t&ocirc;m đặc trưng.</p>\r\n\r\n<p>Đặc điểm nổi bật của b&uacute;n đậu mắm t&ocirc;m l&agrave; sự kết hợp h&agrave;i h&ograve;a giữa c&aacute;c th&agrave;nh phần ch&iacute;nh. B&uacute;n tươi, mềm mịn v&agrave; dai được l&agrave;m từ bột gạo tinh khiết, tạo nền tảng cho m&oacute;n ăn. Đậu hũ non l&agrave; loại đậu tương tươi ngon, c&oacute; vị b&eacute;o v&agrave; mềm mịn. Đậu hũ non được cắt th&agrave;nh từng miếng nhỏ v&agrave; chi&ecirc;n gi&ograve;n, mang đến hương vị ngon miệng v&agrave; độ gi&ograve;n đặc trưng.</p>\r\n\r\n<p>Mắm t&ocirc;m l&agrave; th&agrave;nh phần quan trọng v&agrave; đặc trưng của b&uacute;n đậu mắm t&ocirc;m. Mắm t&ocirc;m được chế biến từ t&ocirc;m tươi v&agrave; c&aacute;c gia vị tự nhi&ecirc;n, tạo n&ecirc;n một nước mắm c&oacute; m&ugrave;i thơm đặc trưng v&agrave; hương vị đậm đ&agrave;. Mắm t&ocirc;m c&oacute; vị mặn, ngọt v&agrave; độc đ&aacute;o, tạo n&ecirc;n hương vị đặc biệt cho m&oacute;n ăn.</p>\r\n\r\n<p>Khi thưởng thức b&uacute;n đậu mắm t&ocirc;m, bạn sẽ cảm nhận được sự kết hợp tuyệt vời giữa b&uacute;n tươi, đậu hũ non gi&ograve;n ngon, rau sống tươi m&aacute;t như rau sống, rau thơm, h&agrave;nh, ớt v&agrave; mắm t&ocirc;m đậm đ&agrave;. M&oacute;n ăn c&ograve;n thường được k&egrave;m theo chả t&ocirc;m chi&ecirc;n gi&ograve;n, nem r&aacute;n hoặc nem chua, tạo th&ecirc;m sự phong ph&uacute; v&agrave; đa dạng vị ngon.</p>', 1, 1, 1, '2024-04-06 10:02:01', 99, 0, '2024-05-09 03:57:45'),
(20, 'Cơm thố gà', 'com-tho-ga', 50000, 0, 23, 0, 4, '2024-04-06__com-tho.png', 4, 0, 1, 1, '<p>Cơm thố l&agrave; một m&oacute;n ăn truyền thống của Việt Nam, c&oacute; xuất xứ từ v&ugrave;ng miền Bắc. Đặc điểm nổi bật của cơm thố l&agrave; c&aacute;ch thưởng thức bằng c&aacute;ch xếp cơm v&agrave; c&aacute;c th&agrave;nh phần l&ecirc;n một chiếc thố gốm truyền thống. Cơm thố bắt đầu với cơm trắng thơm ngon, được nấu ch&iacute;n</p>', '<p>Cơm thố l&agrave; một m&oacute;n ăn truyền thống của người Việt, đặc biệt phổ biến ở miền Bắc v&agrave; miền Trung. Đ&acirc;y l&agrave; một m&oacute;n cơm trộn, c&oacute; t&ecirc;n gọi l&agrave; &quot;thố&quot; v&igrave; thường được tr&igrave;nh b&agrave;y trong một c&aacute;i thố gốm.</p>\r\n\r\n<p>Cơm thố thường được chế biến từ cơm n&oacute;ng vừa mới nấu. Cơm được trộn đều với c&aacute;c nguy&ecirc;n liệu kh&aacute;c như thịt g&agrave; hoặc thịt heo nướng, x&iacute;u mại (thịt xay), chả cốm (chả chi&ecirc;n từ gạo nếp), mỡ h&agrave;nh (mỡ heo chi&ecirc;n với h&agrave;nh), h&agrave;nh phi (h&agrave;nh kh&ocirc; chi&ecirc;n gi&ograve;n), dưa leo v&agrave; h&agrave;nh ng&ograve;.</p>\r\n\r\n<p>Cơm thố c&oacute; hương vị đa dạng v&agrave; hấp dẫn do sự kết hợp của c&aacute;c nguy&ecirc;n liệu v&agrave; gia vị. N&oacute; c&oacute; một hương vị mặn, thơm ngon từ thịt nướng v&agrave; x&iacute;u mại, mỡ h&agrave;nh v&agrave; h&agrave;nh phi mang lại vị b&eacute;o ngậy, c&ograve;n dưa leo v&agrave; h&agrave;nh ng&ograve; tạo ra hương vị tươi m&aacute;t v&agrave; tạo độ gi&ograve;n cho m&oacute;n ăn.</p>\r\n\r\n<p>Cơm thố kh&ocirc;ng chỉ l&agrave; một m&oacute;n ăn ngon m&agrave; c&ograve;n mang trong n&oacute; gi&aacute; trị văn h&oacute;a v&agrave; t&igrave;nh cảm gia đ&igrave;nh. N&oacute; thường được chế biến v&agrave; thưởng thức trong c&aacute;c dịp lễ tết, khi c&oacute; sự sum họp của gia đ&igrave;nh v&agrave; bạn b&egrave;.</p>', 1, 3, 3, '2024-04-06 15:15:06', 10, 0, '2024-05-09 04:00:08'),
(21, 'Nem nướng Nha Trang', 'nem-nuong-nha-trang', 38000, 0, 25, 0, 3, '2024-04-06__nem-nuong-nha-trang.jpg', 3, 0, 1, 0, '<p>Nem nướng Nha Trang - hương vị đậm đ&agrave;, thịt nướng mềm mịn, được cuốn trong l&aacute; chuối tươi thơm, tạo n&ecirc;n m&oacute;n ăn độc đ&aacute;o v&agrave; hấp dẫn của v&ugrave;ng biển xinh đẹp Nha Trang.</p>', '<h2><strong>Nem nướng Nha Trang - M&oacute;n ngon đặc sản từ miền Trung</strong></h2>\r\n\r\n<p>Nem nướng Nha Trang l&agrave; một m&oacute;n ăn đặc sản nổi tiếng từ th&agrave;nh phố biển Nha Trang, miền Trung Việt Nam. M&oacute;n nem nướng n&agrave;y được l&agrave;m từ thịt heo tươi ngon v&agrave; được cuốn trong l&aacute; chuối, tạo n&ecirc;n một hương vị độc đ&aacute;o v&agrave; hấp dẫn.</p>\r\n\r\n<p>Nguy&ecirc;n liệu ch&iacute;nh của nem nướng Nha Trang l&agrave; thịt heo tươi. Thịt heo được chọn kỹ lưỡng, cắt th&agrave;nh những miếng mỏng v&agrave; được ướp với gia vị như tỏi, h&agrave;nh, ớt, đường, nước mắm v&agrave; c&aacute;c loại gia vị kh&aacute;c. Qu&aacute; tr&igrave;nh ướp gi&uacute;p thịt thấm đều hương vị v&agrave; trở n&ecirc;n thơm ngon hơn.</p>\r\n\r\n<p>Sau khi thịt heo đ&atilde; được ướp gia vị, n&oacute; được nướng tr&ecirc;n than hoa, than củi hoặc l&ograve; nướng. Qu&aacute; tr&igrave;nh nướng gi&uacute;p thịt ch&iacute;n mềm, tạo ra một lớp vỏ ngo&agrave;i gi&ograve;n v&agrave; m&agrave;u v&agrave;ng hấp dẫn. Khi nem nướng được nướng ch&iacute;n, n&oacute; c&oacute; một m&agrave;u sắc hấp dẫn v&agrave; hương vị thơm ngon đặc trưng.</p>', 0, 0, 0, '2024-04-06 15:16:50', 100, 0, '2024-04-07 06:46:59'),
(22, 'Trà Sữa Chân Châu Đường Đen', 'tra-sua-chan-chau-duong-den', 28000, 0, 22, 0, 4, '2024-04-06__tra-sua-chan-chau-den.jpeg', 15, 1, 1, 1, '<p>Tr&agrave; sữa ch&acirc;n ch&acirc;u đường đen l&agrave; một loại thức uống phổ biến v&agrave; được ưa chuộng trong nhiều nền văn h&oacute;a ẩm thực, đặc biệt l&agrave; ở Đ&agrave;i Loan v&agrave; c&aacute;c quốc gia Đ&ocirc;ng &Aacute;. Đ&acirc;y l&agrave; một biến thể của tr&agrave; sữa truyền thống với sự th&ecirc;m v&agrave;o của ch&acirc;n ch&acirc;u (tr&acirc;n ch&acirc;u)</p>\r\n\r\n<div class=\"ddict_btn\" style=\"left:316.344px; top:77px\"><img src=\"chrome-extension://bpggmmljdiliancllaapiggllnkbjocb/logo/48.png\" /></div>', '<h2><strong>Tr&agrave; sữa ch&acirc;n ch&acirc;u đường đen - Thức uống của mọi lứa tuổi</strong></h2>\r\n\r\n<p>Tr&agrave; sữa: Tr&agrave; sữa ch&acirc;n ch&acirc;u đường đen thường sử dụng tr&agrave; đen l&agrave;m th&agrave;nh phần ch&iacute;nh. Tr&agrave; được pha v&agrave; ng&acirc;m trong nước n&oacute;ng để tạo ra hương vị đậm đ&agrave; v&agrave; thơm ngon. C&oacute; thể sử dụng c&aacute;c loại tr&agrave; đen như tr&agrave; Assam, tr&agrave; Ceylon hoặc tr&agrave; Đ&agrave;i Loan.</p>\r\n\r\n<p>Sữa: Sữa được sử dụng để tạo th&agrave;nh lớp kem mịn v&agrave; b&eacute;o tr&ecirc;n mặt tr&agrave;. Thường l&agrave; sữa tươi hoặc sữa đặc c&oacute; độ b&eacute;o vừa phải để tạo ra hương vị th&iacute;ch hợp. Một số nơi cũng sử dụng sữa đặc ngọt để tăng th&ecirc;m độ ngọt.</p>\r\n\r\n<p>Ch&acirc;n ch&acirc;u (tr&acirc;n ch&acirc;u): Ch&acirc;n ch&acirc;u l&agrave; những vi&ecirc;n nhỏ, c&oacute; h&igrave;nh cầu, m&agrave;u đen v&agrave; c&oacute; độ đ&agrave;n hồi. Ch&uacute;ng được l&agrave;m từ bột khoai m&igrave; hoặc bột ng&ocirc;, sau đ&oacute; đun ch&iacute;n trong nước đường. Khi ăn, ch&acirc;n ch&acirc;u c&oacute; cảm gi&aacute;c gi&ograve;n, đ&agrave;n hồi v&agrave; ngọt.</p>\r\n\r\n<p>Đường đen: Đường đen l&agrave; một loại đường c&oacute; m&agrave;u s&aacute;nh đen v&agrave; c&oacute; hương vị đặc trưng. N&oacute; thường được sử dụng để l&agrave;m đường cho tr&agrave; sữa ch&acirc;n ch&acirc;u đường đen, tạo ra một hương vị ngọt hấp dẫn v&agrave; m&agrave;u sắc đen đặc trưng cho thức uống n&agrave;y.</p>\r\n\r\n<p>Khi thưởng thức tr&agrave; sữa ch&acirc;n ch&acirc;u đường đen, bạn sẽ c&oacute; hương vị pha trộn của tr&agrave; đen đậm đ&agrave;, sữa b&eacute;o mịn, ch&acirc;n ch&acirc;u gi&ograve;n ngọt v&agrave; hương vị đặc trưng của đường đen. Nhiều người th&iacute;ch tr&agrave; sữa ch&acirc;n ch&acirc;u đường đen v&igrave; kết hợp của c&aacute;c th&agrave;nh phần n&agrave;y, tạo ra một thức uống ngon v&agrave; th&uacute; vị.</p>', 2, 9, 5, '2024-04-06 15:18:17', 99, 0, '2024-05-09 04:04:21'),
(23, 'Bánh Xèo', 'banh-xeo', 30000, 0, 26, 0, 2, '2024-04-06__banh-xeo.jpg', 5, 0, 1, 0, '<p>B&aacute;nh x&egrave;o l&agrave; một m&oacute;n ăn truyền thống đậm đ&agrave; hương vị v&agrave; độc đ&aacute;o của Việt Nam. Khi nhắc đến b&aacute;nh x&egrave;o, h&igrave;nh ảnh một chiếc b&aacute;nh mỏng như tờ giấy, c&oacute; m&agrave;u v&agrave;ng rực rỡ v&agrave; vị gi&ograve;n tan, c&ugrave;ng với nh&acirc;n thịt v&agrave; rau sống tươi ngon, tự nhi&ecirc;n, ngay lập tức hiện về trong</p>', '<p><strong>B&Aacute;NH X&Egrave;O THƠM NGON</strong><br />\r\nB&aacute;nh x&egrave;o l&agrave; một m&oacute;n ăn truyền thống của Việt Nam, đặc biệt phổ biến ở miền Nam. N&oacute; l&agrave; một loại b&aacute;nh chi&ecirc;n gi&ograve;n, c&oacute; lớp vỏ b&ecirc;n ngo&agrave;i mỏng v&agrave; nhẹ, b&ecirc;n trong l&agrave; một phần nh&acirc;n thịt v&agrave; rau sống.</p>\r\n\r\n<p>Vỏ b&aacute;nh: Vỏ b&aacute;nh x&egrave;o được l&agrave;m từ một hỗn hợp bột gạo v&agrave; nước lọc. Bột gạo được trộn kỹ với nước để tạo th&agrave;nh một hỗn hợp nhẹ v&agrave; mịn. Lớp vỏ b&aacute;nh x&egrave;o khi chi&ecirc;n sẽ trở n&ecirc;n gi&ograve;n v&agrave; c&oacute; m&agrave;u v&agrave;ng n&acirc;u hấp dẫn.</p>\r\n\r\n<p>Nh&acirc;n b&aacute;nh: Nh&acirc;n b&aacute;nh x&egrave;o thường gồm c&aacute;c th&agrave;nh phần như thịt heo, t&ocirc;m, h&agrave;nh, gia vị v&agrave; rau sống. Thịt heo v&agrave; t&ocirc;m được th&aacute;i nhỏ hoặc xay nhuyễn, sau đ&oacute; được chế biến với h&agrave;nh v&agrave; gia vị để tạo th&agrave;nh một hỗn hợp thơm ngon. Rau sống như gi&aacute; đỗ, rau thơm, l&aacute; sung, l&aacute; chuối thường được th&ecirc;m v&agrave;o nh&acirc;n b&aacute;nh để tăng th&ecirc;m độ tươi m&aacute;t v&agrave; phong ph&uacute;.</p>\r\n\r\n<p>Chế biến: Khi l&agrave;m b&aacute;nh x&egrave;o, một chảo chảo phẳng v&agrave; rộng được sử dụng. Chảo được đun n&oacute;ng v&agrave; một ch&uacute;t dầu thực vật được th&ecirc;m v&agrave;o. Hỗn hợp bột gạo được đổ v&agrave;o chảo v&agrave; lăn trải đều th&agrave;nh một lớp mỏng. Sau đ&oacute;, nh&acirc;n b&aacute;nh được đặt l&ecirc;n một nửa chiếc b&aacute;nh x&egrave;o. Khi vỏ b&aacute;nh ch&iacute;n v&agrave; gi&ograve;n, b&aacute;nh x&egrave;o được gấp đ&ocirc;i để tạo ra h&igrave;nh dạng nửa tr&ograve;n v&agrave; được chuyển ra đĩa.</p>\r\n\r\n<p>Thưởng thức: B&aacute;nh x&egrave;o thường được thưởng thức bằng c&aacute;ch cuốn v&agrave;o l&aacute; chuối hoặc l&aacute; sung, k&egrave;m theo c&aacute;c loại rau sống như rau thơm, gi&aacute; đỗ v&agrave; c&aacute;c loại rau kh&aacute;c. B&aacute;nh x&egrave;o thường được ăn k&egrave;m với nước mắm pha chua ngọt hoặc mắm n&ecirc;m để tăng th&ecirc;m hương vị.</p>', 0, 0, 0, '2024-04-06 15:19:46', 100, 0, '2024-04-07 06:48:04'),
(24, 'Cơm Tấm Sài Gòn', 'com-tam-sai-gon', 38000, 0, 23, 0, 4, '2024-04-06__com-tam-suon-bi-cha.jpg', 2, 1, 1, 0, '<p>Cơm tấm sườn b&igrave; chả l&agrave; một m&oacute;n ăn phổ biến v&agrave; được ưa th&iacute;ch trong ẩm thực Việt Nam. Được tạo n&ecirc;n từ sự kết hợp tinh tế giữa cơm tấm, sườn nướng, b&igrave; v&agrave; chả, m&oacute;n ăn n&agrave;y mang đến hương vị đậm đ&agrave; v&agrave; sự phong ph&uacute; trong mỗi miếng thưởng thức.</p>', '<p><strong>CƠM TẤM SƯỜN B&Igrave; CHẢ</strong><br />\r\nCơm tấm sườn b&igrave; chả l&agrave; một m&oacute;n ăn phổ biến v&agrave; được ưa th&iacute;ch trong ẩm thực Việt Nam. Được tạo n&ecirc;n từ sự kết hợp tinh tế giữa cơm tấm, sườn nướng, b&igrave; v&agrave; chả, m&oacute;n ăn n&agrave;y mang đến hương vị đậm đ&agrave; v&agrave; sự phong ph&uacute; trong mỗi miếng thưởng thức.</p>\r\n\r\n<p>Cơm tấm, loại cơm ngon v&agrave; thơm được l&agrave;m từ gạo tinh khiết, l&agrave; nền tảng của m&oacute;n ăn n&agrave;y. Hạt gạo được chọn lọc kỹ c&agrave;ng, sau đ&oacute; nấu ch&iacute;n mềm v&agrave; thơm bằng c&aacute;ch sử dụng nồi cơm điện hoặc nồi cơm cơ truyền thống. Cơm tấm c&oacute; hạt gạo mềm nhưng kh&ocirc;ng nh&atilde;o, tạo ra một sự c&acirc;n đối ho&agrave;n hảo giữa độ hấp dẫn v&agrave; độ dẻo của hạt gạo.</p>\r\n\r\n<p>Cơm tấm sườn b&igrave; chả thường được phục vụ với nước mắm pha chua ngọt hoặc nước mắm n&ecirc;m th&ecirc;m theo khẩu vị. Một số gia đ&igrave;nh c&oacute; thể th&ecirc;m một v&agrave;i l&aacute;t chanh để tạo th&ecirc;m hương vị chua thanh.</p>\r\n\r\n<p>Cơm tấm sườn b&igrave; chả kh&ocirc;ng chỉ l&agrave; một m&oacute;n ăn ngon m&agrave; c&ograve;n thể hiện sự s&aacute;ng tạo v&agrave; tinh tế trong ẩm thực Việt Nam. Hương vị đa dạng v&agrave; sự kết hợp ho&agrave;n hảo của c&aacute;c th&agrave;nh phần khiến cơm tấm sườn b&igrave; chả trở th&agrave;nh một m&oacute;n ăn phổ biến v&agrave; được y&ecirc;u th&iacute;ch trong nhiều nh&agrave; h&agrave;ng v&agrave; qu&aacute;n ăn tr&ecirc;n khắp Việt Nam.</p>\r\n\r\n<div class=\"ddict_btn\" style=\"left:173.062px; top:20px\"><img src=\"chrome-extension://bpggmmljdiliancllaapiggllnkbjocb/logo/48.png\" /></div>', 2, 8, 4, '2024-04-06 15:21:04', 100, 0, '2024-05-09 04:01:51'),
(25, 'Nem Kem Bơ Hải Sản', 'nem-kem-bo-hai-san', 55000, 0, 25, 0, 4, '2024-04-06__nem-kem-bo-hai-san.jpg', 5, 1, 1, 1, '<p>Nem kem bơ hải sản l&agrave; một m&oacute;n ăn kh&aacute; phổ biến trong ẩm thực Việt Nam. Được l&agrave;m từ bột gạo mỏng được cuộn lại với c&aacute;c nguy&ecirc;n liệu hải sản v&agrave; kem bơ, nem kem bơ hải sản mang đến hương vị độc đ&aacute;o v&agrave; kết hợp giữa c&aacute;c th&agrave;nh phần tươi ngon.</p>', '<p>Nem kem bơ hải sản l&agrave; một m&oacute;n ăn độc đ&aacute;o v&agrave; ngon miệng trong ẩm thực Việt Nam. Đ&acirc;y l&agrave; một loại nem r&aacute;n c&oacute; nh&acirc;n b&ecirc;n trong l&agrave; hỗn hợp của kem bơ v&agrave; hải sản tươi ngon.</p>\r\n\r\n<p>Nem kem bơ hải sản thường c&oacute; nh&acirc;n b&ecirc;n trong l&agrave; một pha trộn giữa kem bơ v&agrave; c&aacute;c loại hải sản như t&ocirc;m, cua, mực, c&aacute;... Hải sản được xay nhuyễn hoặc băm nhỏ v&agrave; trộn chung với kem bơ, gia vị như tỏi, h&agrave;nh, ti&ecirc;u, muối v&agrave; c&aacute;c loại gia vị kh&aacute;c để tạo n&ecirc;n một hỗn hợp thơm ngon v&agrave; đậm đ&agrave;.</p>\r\n\r\n<p>Sau khi nh&acirc;n đ&atilde; được chuẩn bị, một lớp b&aacute;nh tr&aacute;ng mỏng v&agrave; gi&ograve;n được sử dụng để g&oacute;i nh&acirc;n b&ecirc;n trong. B&aacute;nh tr&aacute;ng thường được ướt qua nước để mềm hơn v&agrave; dễ d&agrave;ng g&oacute;i nem. Nh&acirc;n kem bơ hải sản được đặt ở trung t&acirc;m b&aacute;nh tr&aacute;ng v&agrave; sau đ&oacute; được gấp lại th&agrave;nh h&igrave;nh dạng nem truyền thống.</p>\r\n\r\n<p>Sau khi nem đ&atilde; được g&oacute;i, ch&uacute;ng được chi&ecirc;n trong dầu n&oacute;ng cho đến khi bề mặt trở n&ecirc;n v&agrave;ng v&agrave; gi&ograve;n. Qu&aacute; tr&igrave;nh chi&ecirc;n gi&uacute;p tạo ra một lớp vỏ gi&ograve;n rụm b&ecirc;n ngo&agrave;i v&agrave; giữ cho nh&acirc;n b&ecirc;n trong thơm ngon v&agrave; nước chảy.</p>\r\n\r\n<p>Nem kem bơ hải sản thường được thưởng thức khi c&ograve;n n&oacute;ng, c&ugrave;ng với rau sống như rau sống, rau diếp c&aacute;, rau ng&ograve;, rau c&acirc;u v&agrave; c&aacute;c loại gia vị như mắm n&ecirc;m, nước mắm pha chua ngọt hoặc nước mắm gừng. Bạn c&oacute; thể ăn nem kem bơ hải sản bằng c&aacute;ch cuốn n&oacute; trong l&aacute; rau sống v&agrave; chấm v&agrave;o nước mắm hoặc mắm n&ecirc;m.</p>\r\n\r\n<p>M&oacute;n nem kem bơ hải sản mang lại hương vị độc đ&aacute;o v&agrave; tương đối ngọt ng&agrave;o từ kem bơ, kết hợp với hương vị tươi ngon v&agrave; thịt của hải sản. Vỏ nem gi&ograve;n rụm tạo sự đối lập với nh&acirc;n mềm mịn b&ecirc;n trong. Đ&acirc;y l&agrave; một m&oacute;n ăn ngon v&agrave; hấp dẫn, thường được l&agrave;m m&oacute;n khai vị tại c&aacute;c nh&agrave; h&agrave;ng v&agrave; qu&aacute;n ăn tr&ecirc;n khắp Việt Nam.</p>', 1, 2, 2, '2024-04-06 15:48:14', 9, 0, '2024-05-09 03:58:06'),
(26, 'Bún Bò Huế', 'bun-bo-hue', 50000, 0, 24, 0, 5, '2024-04-06__bun-bo-hue.jpg', 7, 0, 1, 0, '<p>B&uacute;n b&ograve; Huế l&agrave; một m&oacute;n ăn truyền thống của Việt Nam, c&oacute; nguồn gốc từ th&agrave;nh phố Huế - một th&agrave;nh phố lịch sử nằm ở miền Trung Việt Nam. M&oacute;n ăn n&agrave;y được coi l&agrave; một trong những m&oacute;n b&uacute;n ngon v&agrave; nổi tiếng nhất của đất nước.</p>', '<p>B&uacute;n b&ograve; Huế thường được l&agrave;m từ c&aacute;c th&agrave;nh phần ch&iacute;nh sau:</p>\r\n\r\n<ol>\r\n	<li>\r\n	<p>B&uacute;n: Loại b&uacute;n sợi mịn v&agrave; dai, được l&agrave;m từ bột gạo. N&oacute; c&oacute; chiều d&agrave;i v&agrave; độ rộng tương đối so với b&uacute;n phở.</p>\r\n	</li>\r\n	<li>\r\n	<p>Thịt b&ograve;: Thường l&agrave; c&aacute;c mảnh thịt b&ograve; mềm, như thịt ba chỉ, thịt bắp b&ograve;, hoặc thịt ch&acirc;n gi&ograve; b&ograve;. Thịt b&ograve; thường được nấu mềm trong nước d&ugrave;ng để trở n&ecirc;n thơm ngon v&agrave; dễ ăn.</p>\r\n	</li>\r\n	<li>\r\n	<p>Mắm ruốc: Một loại mắm t&ocirc;m đặc biệt được sử dụng để l&agrave;m nước d&ugrave;ng của b&uacute;n b&ograve; Huế. Mắm ruốc đ&oacute;ng vai tr&ograve; quan trọng trong việc tạo n&ecirc;n hương vị đậm đ&agrave; v&agrave; đặc trưng của m&oacute;n ăn n&agrave;y.</p>\r\n	</li>\r\n	<li>\r\n	<p>H&agrave;nh, ng&ograve;, rau sống: B&uacute;n b&ograve; Huế thường được th&ecirc;m c&aacute;c loại rau sống như gi&aacute; đỗ, h&uacute;ng quế, rau sống, l&aacute; chanh, t&iacute;a t&ocirc; v&agrave; h&agrave;nh l&aacute;. Những loại rau n&agrave;y tạo th&ecirc;m sự tươi m&aacute;t v&agrave; gia vị cho m&oacute;n ăn.</p>\r\n	</li>\r\n	<li>\r\n	<p>Bột ớt: B&uacute;n b&ograve; Huế thường được ăn k&egrave;m với bột ớt để tăng cường độ cay v&agrave; hương vị. Bột ớt thường được l&agrave;m từ ớt kh&ocirc; v&agrave; c&aacute;c gia vị kh&aacute;c.</p>\r\n	</li>\r\n</ol>\r\n\r\n<p>Nước d&ugrave;ng của b&uacute;n b&ograve; Huế c&oacute; hương vị đậm đ&agrave;, thơm ngon v&agrave; hơi cay. N&oacute; thường được nấu từ xương b&ograve;, h&agrave;nh, tỏi, gia vị v&agrave; mắm ruốc. M&oacute;n ăn n&agrave;y c&oacute; một hương vị đặc trưng v&agrave; cung cấp một trải nghiệm ẩm thực độc đ&aacute;o.</p>\r\n\r\n<p>Khi được thưởng thức, b&uacute;n b&ograve; Huế thường được tr&igrave;nh b&agrave;y trong một t&ocirc; lớn, với b&uacute;n, thịt b&ograve; v&agrave; rau sống được xếp tr&ecirc;n tr&ecirc;n. Người d&ugrave;ng c&oacute; thể th&ecirc;m nước d&ugrave;ng, bột ớt v&agrave; c&aacute;c loại gia vị kh&aacute;c theo khẩu vị c&aacute; nh&acirc;n.</p>\r\n\r\n<p>B&uacute;n b&ograve; Huế l&agrave; một m&oacute;n ăn phổ biến trong c&aacute;c nh&agrave; h&agrave;ng Việt Nam v&agrave; c&oacute; sự ưa chuộng của nhiều người y&ecirc;u th&iacute;ch ẩm thực.</p>', 0, 0, 0, '2024-04-06 15:49:22', 20, 0, NULL),
(27, 'Cơm Cuộn Kimbap Hàn Quốc', 'com-cuon-kimbap-han-quoc', 69000, 0, 23, 0, 5, '2024-04-06__com-cuon-kimbap.jpg', 11, 1, 1, 0, '<p>Kimbap l&agrave; một m&oacute;n ăn truyền thống của H&agrave;n Quốc. Đ&acirc;y l&agrave; một loại cơm cuộn được l&agrave;m từ cơm nếp trắng, l&aacute; rong biển (gim), v&agrave; c&aacute;c nguy&ecirc;n liệu như thịt, trứng, rau v&agrave; muối c&aacute;. Cơm v&agrave; nguy&ecirc;n liệu được sắp xếp tr&ecirc;n l&aacute; rong biển v&agrave; cuộn chặt lại. Kimbap c&oacute; hương</p>', '<p>Cơm cuộn Kimbap l&agrave; một m&oacute;n ăn truyền thống của H&agrave;n Quốc, c&oacute; h&igrave;nh dạng v&agrave; c&aacute;ch l&agrave;m tương tự như sushi Nhật Bản. Tuy nhi&ecirc;n, Kimbap c&oacute; những đặc trưng ri&ecirc;ng biệt v&agrave; thường được l&agrave;m với c&aacute;c nguy&ecirc;n liệu H&agrave;n Quốc.</p>\r\n\r\n<p>Cơm cuộn Kimbap thường được l&agrave;m bằng cơm nếp trắng được nấu ch&iacute;n v&agrave; trộn với một ch&uacute;t giấm gạo, đường v&agrave; muối để tạo hương vị đặc trưng. Cơm sau đ&oacute; được trải mỏng v&agrave; đều l&ecirc;n một tấm l&aacute; rong biển (gim) c&oacute; k&iacute;ch thước tương đối lớn.</p>\r\n\r\n<p>C&aacute;c nguy&ecirc;n liệu kh&aacute;c được sắp xếp tr&ecirc;n cơm v&agrave; cuộn chặt lại. Truyền thống, Kimbap thường c&oacute; một số nguy&ecirc;n liệu như thịt g&agrave; hoặc thịt heo nướng mỏng, trứng chi&ecirc;n, c&agrave; chua, dưa chuột, c&agrave; rốt, cải ng&ograve;, v&agrave; muối c&aacute;. Tuy nhi&ecirc;n, c&oacute; nhiều biến thể v&agrave; sự đa dạng trong việc lựa chọn nguy&ecirc;n liệu, v&agrave; người ta c&oacute; thể th&ecirc;m c&aacute;c th&agrave;nh phần như t&ocirc;m, c&aacute; ngừ, c&aacute; hồi, rau muống, ớt, hay kim chi tuỳ theo khẩu vị c&aacute; nh&acirc;n.</p>\r\n\r\n<p>Sau khi c&aacute;c nguy&ecirc;n liệu đ&atilde; được sắp xếp tr&ecirc;n cơm, cơm cuộn Kimbap được cuộn chặt lại bằng sự trợ gi&uacute;p của một chiếc khăn sạch hoặc một tấm thảm cuộn đặc biệt. Sau đ&oacute;, n&oacute; được cắt th&agrave;nh từng miếng nhỏ, tương tự như sushi, để dễ d&agrave;ng ăn.</p>\r\n\r\n<p>Cơm cuộn Kimbap thường được ăn k&egrave;m với một số loại nước mắm chua ngọt hoặc mắm đậu phụng. M&oacute;n ăn n&agrave;y c&oacute; hương vị tươi ngon, h&ograve;a quyện giữa vị chua, ngọt, mặn v&agrave; c&oacute; độ gi&ograve;n từ rong biển b&ecirc;n ngo&agrave;i. Kimbap thường được xem l&agrave; một m&oacute;n ăn tiện lợi, th&iacute;ch hợp cho bữa trưa hoặc một bữa nhẹ trong ng&agrave;y.</p>\r\n\r\n<p>Cơm cuộn Kimbap l&agrave; một m&oacute;n ăn phổ biến v&agrave; được ưa chuộng kh&ocirc;ng chỉ trong nền ẩm thực H&agrave;n Quốc m&agrave; c&ograve;n tr&ecirc;n to&agrave;n thế giới.</p>', 0, 0, 0, '2024-04-06 15:50:16', 100, 0, '2024-04-28 09:30:13'),
(28, 'Kem Dừa Côn Đảo', 'kem-dua-con-dao', 39000, 0, 22, 0, 3, '2024-04-06__kem-dua.jpg', 25, 1, 1, 7, '<p>Kem dừa C&ocirc;n Đảo l&agrave; một m&oacute;n tr&aacute;ng miệng ngon l&agrave;nh v&agrave; đặc trưng của h&ograve;n đảo C&ocirc;n Đảo ở Việt Nam. Được l&agrave;m từ dừa tươi v&agrave; c&aacute;c nguy&ecirc;n liệu tự nhi&ecirc;n kh&aacute;c, kem dừa C&ocirc;n Đảo c&oacute; hương vị độc đ&aacute;o v&agrave; thơm ngon, l&agrave; một m&oacute;n ăn kh&ocirc;ng thể thiếu khi gh&eacute; thăm C&ocirc;n Đảo.</p>', '<h2><strong>Kem dừa C&ocirc;n Đảo - xua tan nắng n&oacute;ng ng&agrave;y h&egrave;</strong></h2>\r\n\r\n<p>Kem dừa C&ocirc;n Đảo l&agrave; một m&oacute;n tr&aacute;ng miệng ngon l&agrave;nh v&agrave; đặc trưng của h&ograve;n đảo C&ocirc;n Đảo ở Việt Nam. Được l&agrave;m từ dừa tươi v&agrave; c&aacute;c nguy&ecirc;n liệu tự nhi&ecirc;n kh&aacute;c, kem dừa C&ocirc;n Đảo c&oacute; hương vị độc đ&aacute;o v&agrave; thơm ngon, l&agrave; một m&oacute;n ăn kh&ocirc;ng thể thiếu khi gh&eacute; thăm C&ocirc;n Đảo.</p>\r\n\r\n<p>Kem dừa C&ocirc;n Đảo được chế biến từ nước cốt dừa tươi, đường, v&agrave; một số th&agrave;nh phần kh&aacute;c như bột sữa, muối, v&agrave; c&oacute; thể c&oacute; sự th&ecirc;m gia vị như vani hoặc một ch&uacute;t rượu rum để tăng th&ecirc;m hương vị. Nguy&ecirc;n liệu được kết hợp v&agrave; trộn đều, sau đ&oacute; hỗn hợp được đổ v&agrave;o m&aacute;y l&agrave;m kem để l&agrave;m nguội v&agrave; đ&ocirc;ng lạnh.</p>\r\n\r\n<p>Kem dừa C&ocirc;n Đảo c&oacute; hương vị tươi m&aacute;t v&agrave; b&eacute;o ngậy của dừa, mang đến một trải nghiệm thưởng thức kem đặc biệt. Texture của kem thường mềm mịn v&agrave; mịn m&agrave;ng, tạo cảm gi&aacute;c mượt m&agrave; khi thưởng thức. N&oacute; thường được phục vụ trong c&aacute;c cốc hoặc kẹp b&aacute;nh m&igrave;, v&agrave; bạn c&oacute; thể th&ecirc;m c&aacute;c loại topping như hạt dừa rang, s&ocirc; c&ocirc; la, hoặc tr&aacute;i c&acirc;y tươi để l&agrave;m đẹp v&agrave; tăng th&ecirc;m hương vị.</p>\r\n\r\n<p>Kem dừa C&ocirc;n Đảo kh&ocirc;ng chỉ l&agrave; một m&oacute;n tr&aacute;ng miệng ngon m&agrave; c&ograve;n thể hiện cả văn h&oacute;a ẩm thực đặc trưng của đảo C&ocirc;n Đảo. Khi đến thăm C&ocirc;n Đảo, bạn kh&ocirc;ng n&ecirc;n bỏ qua cơ hội thưởng thức kem dừa n&agrave;y để trải nghiệm hương vị độc đ&aacute;o v&agrave; tận hưởng kh&ocirc;ng kh&iacute; biển m&aacute;t mẻ.</p>', 1, 5, 5, '2024-04-06 15:51:54', 94, 0, '2024-04-28 09:28:46'),
(31, 'Trà đào cam sả', 'tra-dao-cam-sa', 50000, 0, 1, 0, 3, '2024-05-10__tra-dao-cam-sa.png', 3, 0, 1, 1, NULL, '<p>Tr&agrave; đ&agrave;o cam xả l&agrave; một loại đồ uống tr&agrave; truyền thống phổ biến, thường được phục vụ trong m&ugrave;a h&egrave; hoặc khi cần một loại đồ uống m&aacute;t lạnh v&agrave; thơm ngon. Đ&acirc;y l&agrave; một sự kết hợp h&agrave;i h&ograve;a giữa tr&agrave; đen, đ&agrave;o v&agrave; cam xả, tạo n&ecirc;n hương vị độc đ&aacute;o v&agrave; sảng kho&aacute;i.</p>\r\n\r\n<p>Tr&agrave; đ&agrave;o cam xả thường được l&agrave;m như sau: tr&agrave; đen được pha nước n&oacute;ng, sau đ&oacute; được l&agrave;m nguội hoặc đặt trong tủ lạnh để l&agrave;m lạnh. Đ&agrave;o v&agrave; cam xả được cắt th&agrave;nh những miếng nhỏ hoặc nghiền nhuyễn để tạo hương vị tự nhi&ecirc;n v&agrave; tươi m&aacute;t. Sau đ&oacute;, đ&agrave;o v&agrave; cam xả được th&ecirc;m v&agrave;o tr&agrave; đen l&agrave;m m&aacute;t uống v&agrave; mang đến một hương vị tươi mới v&agrave; gi&agrave;u vitamin C.</p>\r\n\r\n<p>Tr&agrave; đ&agrave;o cam xả c&oacute; hương thơm tự nhi&ecirc;n của tr&agrave; đen, hương vị ngọt ng&agrave;o của đ&agrave;o v&agrave; hậu vị chua nhẹ, m&aacute;t lạnh của cam xả. Đ&acirc;y l&agrave; một loại đồ uống th&uacute; vị v&agrave; hấp dẫn, th&iacute;ch hợp để giải kh&aacute;t v&agrave; thưởng thức trong c&aacute;c buổi gặp gỡ bạn b&egrave;, dạo chơi ngo&agrave;i trời hoặc thậm ch&iacute; chỉ đơn giản l&agrave; thưởng thức trong gia đ&igrave;nh.</p>\r\n\r\n<p>Tr&agrave; đ&agrave;o cam xả cũng c&oacute; lợi &iacute;ch sức khỏe, bởi v&igrave; n&oacute; kết hợp c&aacute;c th&agrave;nh phần tự nhi&ecirc;n như tr&agrave;, đ&agrave;o v&agrave; cam xả. Tr&agrave; đen chứa chất chống oxy h&oacute;a v&agrave; c&oacute; thể gi&uacute;p cải thiện sức khỏe tim mạch. Đ&agrave;o chứa nhiều vitamin C v&agrave; chất chống oxy h&oacute;a, c&oacute; thể tăng cường hệ miễn dịch v&agrave; bảo vệ cơ thể khỏi c&aacute;c t&aacute;c động xấu từ m&ocirc;i trường. Cam xả c&oacute; t&aacute;c dụng l&agrave;m dịu t&acirc;m trạng, giảm căng thẳng v&agrave; cung cấp một lượng nhỏ chất chống oxy h&oacute;a.</p>', 0, 0, 0, '2024-05-10 16:56:53', 99, 0, '2024-05-15 19:11:08');

-- --------------------------------------------------------

--
-- Table structure for table `products_attributes`
--

CREATE TABLE `products_attributes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `pa_product_id` int(11) NOT NULL DEFAULT 0,
  `pa_attribute_id` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products_attributes`
--

INSERT INTO `products_attributes` (`id`, `pa_product_id`, `pa_attribute_id`) VALUES
(153, 11, 1),
(154, 11, 2),
(155, 11, 3),
(156, 10, 1),
(157, 9, 1),
(158, 9, 2),
(159, 9, 3),
(160, 8, 1),
(161, 8, 2),
(162, 6, 1),
(163, 6, 2),
(164, 6, 3),
(165, 6, 4),
(166, 6, 5),
(167, 5, 6),
(168, 5, 7),
(169, 4, 1),
(172, 2, 6),
(173, 3, 6),
(175, 1, 1),
(182, 7, 2),
(189, 12, 5),
(190, 12, 6),
(191, 13, 5),
(192, 13, 7),
(195, 14, 5),
(196, 14, 8),
(223, 16, 1),
(224, 16, 7),
(225, 17, 1),
(226, 17, 7),
(241, 15, 2),
(242, 15, 7);

-- --------------------------------------------------------

--
-- Table structure for table `products_keywords`
--

CREATE TABLE `products_keywords` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `pk_product_id` int(11) NOT NULL DEFAULT 0,
  `pk_keyword_id` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products_keywords`
--

INSERT INTO `products_keywords` (`id`, `pk_product_id`, `pk_keyword_id`) VALUES
(63, 11, 1),
(64, 11, 2),
(65, 11, 3),
(69, 10, 2),
(70, 10, 6),
(71, 10, 7),
(72, 9, 1),
(73, 9, 3),
(74, 9, 6),
(75, 8, 3),
(76, 8, 5),
(77, 8, 6),
(81, 6, 3),
(82, 5, 3),
(83, 5, 4),
(84, 5, 5),
(85, 4, 1),
(86, 4, 2),
(87, 4, 3),
(92, 2, 1),
(93, 2, 2),
(94, 3, 1),
(95, 3, 2),
(96, 3, 7),
(100, 1, 1),
(101, 1, 2),
(102, 1, 3),
(106, 7, 3),
(107, 7, 4),
(108, 7, 5),
(115, 12, 5),
(116, 12, 8),
(117, 13, 2),
(119, 14, 8),
(133, 17, 4),
(134, 16, 1),
(142, 15, 2);

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `pi_name` varchar(255) DEFAULT NULL,
  `pi_slug` varchar(255) DEFAULT NULL,
  `pi_product_id` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ratings`
--

CREATE TABLE `ratings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `r_user_id` int(11) NOT NULL DEFAULT 0,
  `r_product_id` int(11) NOT NULL DEFAULT 0,
  `r_number` tinyint(4) NOT NULL DEFAULT 0,
  `r_status` tinyint(4) NOT NULL DEFAULT 0,
  `r_content` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ratings`
--

INSERT INTO `ratings` (`id`, `r_user_id`, `r_product_id`, `r_number`, `r_status`, `r_content`, `created_at`, `updated_at`) VALUES
(3, 37, 11, 2, 0, 'Sản phẩm rất tốt', '2022-01-07 14:53:54', '2022-01-07 14:53:54'),
(4, 38, 12, 5, 0, 'Sản phẩm rất tuyệt', '2022-01-07 14:53:54', '2022-01-07 14:53:54'),
(5, 39, 9, 3, 0, 'sản phẩm tốt nhất tôi từng mua!', '2022-01-07 14:53:54', '2022-01-07 14:53:54'),
(6, 36, 7, 5, 0, 'giá cả rất phải chăng!', '2022-01-07 14:53:54', '2022-01-07 14:53:54'),
(7, 35, 7, 4, 0, 'giao hàng rất nhanh, rất tốt !', '2022-01-07 14:53:54', '2022-01-07 14:53:54'),
(8, 41, 14, 5, 0, 'rất tốt đánh giá 5*', '2022-01-08 08:53:56', '2022-01-08 08:53:56'),
(9, 43, 15, 5, 0, NULL, '2024-04-05 10:03:14', '2024-04-05 10:03:14'),
(10, 43, 16, 4, 0, NULL, '2024-04-05 10:03:35', '2024-04-05 10:03:35'),
(11, 43, 16, 4, 0, NULL, '2024-04-05 10:03:36', '2024-04-05 10:03:36'),
(12, 43, 22, 5, 0, 'tốt', '2024-04-08 10:19:20', '2024-04-08 10:19:20'),
(13, 43, 28, 5, 0, NULL, '2024-04-09 11:59:24', '2024-04-09 11:59:24'),
(14, 43, 17, 2, 0, NULL, '2024-05-09 03:57:21', '2024-05-09 03:57:21'),
(15, 43, 18, 1, 0, NULL, '2024-05-09 03:57:45', '2024-05-09 03:57:45'),
(16, 43, 25, 2, 0, NULL, '2024-05-09 03:58:06', '2024-05-09 03:58:06'),
(17, 43, 20, 3, 0, NULL, '2024-05-09 04:00:08', '2024-05-09 04:00:08'),
(18, 43, 24, 4, 0, NULL, '2024-05-09 04:01:25', '2024-05-09 04:01:25'),
(19, 43, 24, 4, 0, NULL, '2024-05-09 04:01:51', '2024-05-09 04:01:51'),
(20, 43, 22, 4, 0, NULL, '2024-05-09 04:04:21', '2024-05-09 04:04:21'),
(21, 43, 17, 4, 0, 'tốt', '2024-05-15 17:54:26', '2024-05-15 17:54:26');

-- --------------------------------------------------------

--
-- Table structure for table `slides`
--

CREATE TABLE `slides` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sd_title` varchar(255) DEFAULT NULL,
  `sd_link` varchar(255) DEFAULT NULL,
  `sd_image` varchar(255) DEFAULT NULL,
  `sd_target` tinyint(4) NOT NULL DEFAULT 1,
  `sd_active` tinyint(4) NOT NULL DEFAULT 1,
  `sd_sort` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `slides`
--

INSERT INTO `slides` (`id`, `sd_title`, `sd_link`, `sd_image`, `sd_target`, `sd_active`, `sd_sort`, `created_at`, `updated_at`) VALUES
(1, 'slide 1', '/', '2024-04-05__home-banner-1.jpg', 1, 1, 1, '2024-04-29 09:24:30', '2024-04-29 09:24:30'),
(2, 'slide 2', '/', '2024-04-05__home-banner-5.jpg', 1, 1, 2, '2024-04-05 15:21:17', '2024-04-05 15:21:17'),
(3, 'slide 5', '/', '2024-04-05__home-banner-4.jpg', 1, 1, 3, '2024-04-05 10:42:51', '2024-04-05 10:42:51');

-- --------------------------------------------------------

--
-- Table structure for table `statics`
--

CREATE TABLE `statics` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `s_title` varchar(255) DEFAULT NULL,
  `s_slug` varchar(255) DEFAULT NULL,
  `s_type` tinyint(4) NOT NULL DEFAULT 0,
  `s_md5` varchar(255) DEFAULT NULL,
  `s_content` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `statics`
--

INSERT INTO `statics` (`id`, `s_title`, `s_slug`, `s_type`, `s_md5`, `s_content`, `created_at`, `updated_at`) VALUES
(1, 'Hướng dẫn chi tiết mua hàng', NULL, 1, NULL, '<p>Khi mua h&agrave;ng bạn k&iacute;ch chọn size sản phẩm</p>\r\n\r\n<p>Tiếp theo đ&oacute; k&iacute;ch v&agrave;o mua ngay&nbsp;</p>', '2020-11-20 16:48:17', '2020-11-20 16:48:17');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tst_user_id` int(11) NOT NULL DEFAULT 0,
  `tst_total_money` int(11) NOT NULL DEFAULT 0,
  `tst_name` varchar(255) DEFAULT NULL,
  `tst_code` varchar(50) NOT NULL,
  `tst_email` varchar(255) DEFAULT NULL,
  `tst_phone` varchar(255) DEFAULT NULL,
  `tst_address` varchar(255) DEFAULT NULL,
  `tst_note` varchar(255) DEFAULT NULL,
  `tst_status` tinyint(4) NOT NULL DEFAULT 1,
  `tst_type` tinyint(4) NOT NULL DEFAULT 1 COMMENT ' 1 thanh toan thuong, 2 la thanh toan online',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `tst_user_id`, `tst_total_money`, `tst_name`, `tst_code`, `tst_email`, `tst_phone`, `tst_address`, `tst_note`, `tst_status`, `tst_type`, `created_at`, `updated_at`) VALUES
(15, 43, 55200, 'Tài Huy', '3wjLnf235v6BcJR', 'taihuy@gmail.com', '02222222222', 'hoa binh', NULL, 1, 1, '2024-04-05 10:01:15', NULL),
(16, 43, 230000, 'Tài Huy', 'UeCNY2D5VycLwub', 'taihuy@gmail.com', '02222222222', 'hoa binh', NULL, 3, 1, '2024-04-07 06:21:11', '2024-04-07 09:20:15'),
(17, 43, 160520, 'Tài Huy', 'J3ACQoGxvi07gCm', 'taihuy@gmail.com', '02222222222', 'hoa binh', NULL, 3, 1, '2024-04-07 06:49:28', '2024-04-07 09:20:10'),
(23, 43, 151320, 'Tài Huy', 'RxaeU5WdsFo6Tfv', 'taihuy@gmail.com', '02222222222', 'Thịnh Vượng, Lạc Thịnh, Yên Thủy, Hòa Bình', NULL, 1, 1, '2024-05-11 10:27:50', NULL),
(24, 43, 37830, 'Tài Huy', '7lFEyiPD6V2FsqN', 'taihuy@gmail.com', '02222222222', 'Thịnh Vượng, Lạc Thịnh, Yên Thủy, Hòa Bình', NULL, 1, 1, '2024-05-14 02:52:25', NULL),
(36, 43, 73720, 'Tài Huy', '', 'taihuy@gmail.com', '02222222222', 'Thịnh Vượng, Lạc Thịnh, Yên Thủy, Hòa Bình', NULL, 1, 1, '2024-05-14 06:50:21', '2024-05-14 06:58:02'),
(37, 43, 36860, 'Tài Huy', '', 'taihuy@gmail.com', '02222222222', 'Thịnh Vượng, Lạc Thịnh, Yên Thủy, Hòa Bình', NULL, 2, 1, '2024-05-14 06:59:54', '2024-05-14 07:44:14'),
(38, 43, 41160, 'Tài Huy', '', 'taihuy@gmail.com', '02222222222', 'Thịnh Vượng, Lạc Thịnh, Yên Thủy, Hòa Bình', NULL, 1, 1, '2024-05-14 08:07:46', '2024-05-14 08:08:21'),
(39, 48, 36860, 'Tài Huy', '', 'huyteo559@gmail.com', '0123456777', 'hòa bình', NULL, 1, 1, '2024-05-14 08:27:57', '2024-05-14 08:28:30'),
(42, 50, 0, 'Nguyễn Tài Huy', 'W86ezTrga6Q1ZQG', 'taihuy1234@gmail.com', '0123456789', '3', NULL, 1, 1, '2024-05-17 05:28:08', NULL),
(43, 50, 0, 'Nguyễn Tài Huy', 'FyV91KnTauSHRkE', 'taihuy1234@gmail.com', '0123456789', '3', NULL, 1, 1, '2024-05-17 05:28:09', NULL),
(44, 50, 105600, 'Nguyễn Tài Huy', '7ncElYJW3EnF5mQ', 'taihuy1234@gmail.com', '0123456789', 'hoa binh', NULL, 1, 1, '2024-05-17 05:36:38', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `t_name` varchar(255) DEFAULT NULL,
  `t_slug` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`id`, `t_name`, `t_slug`, `created_at`, `updated_at`) VALUES
(1, 'Khối lượng', 'khoi-luong', '2020-11-20 16:48:39', '2020-11-20 16:48:39'),
(2, 'Đơn vị', 'don-vi', '2020-11-20 16:48:39', '2020-11-20 16:48:39');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `log_login` text DEFAULT NULL,
  `count_comment` tinyint(4) NOT NULL DEFAULT 0,
  `address` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `google_id` varchar(50) DEFAULT NULL,
  `facebook_id` varchar(50) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `phone`, `log_login`, `count_comment`, `address`, `avatar`, `google_id`, `facebook_id`, `remember_token`, `created_at`, `updated_at`) VALUES
(39, 'Minh Mạnh', 'minhmanh@gmail.com', NULL, '$2y$10$wHqjnF1KZkiephAY77gXfebuXJrGh/MT5UkUy6UZAAX8sLb.Gxe0W', '03765323323', NULL, 0, NULL, NULL, NULL, NULL, NULL, '2022-01-07 14:35:40', NULL),
(41, 'Khánh Minh', 'minhkhanhchanel@gmail.com', NULL, 'eyJpdiI6IjlobDg5SHRcL3kzbThiNENQT0g4eVp3PT0iLCJ2YWx1ZSI6InZBbnk2b3lnWE9MYU1GQlwvdGxPS3k0RFp0ckdXYmdkTmo5bjFvV3YzQ1lzPSIsIm1hYyI6ImQ0NTQ5NzI2ODM5YTkyMzMwN2YxMjU1ODQ5NzAzMzE0Mjc0ZTZlZDRlNmFjZjI5YTIyZjYyZDY4NGIzZGY2ZTEifQ==', '', NULL, 1, NULL, NULL, NULL, NULL, NULL, '2022-01-08 08:53:24', '2022-01-08 08:53:24'),
(42, 'xxxx', 'xxxx@gmail.com', NULL, '$2y$10$DsiZh2A7EitYnBaznoJHJes/tVQM.glTjWbrLGR9ZtulRQPRfMbhm', '0987654321', NULL, 0, NULL, NULL, NULL, NULL, NULL, '2023-04-10 08:17:26', NULL),
(43, 'Tài Huy', 'taihuy@gmail.com', NULL, '$2y$10$E/wt7r4GkROyIVXdxVWD6OLerRYffeq9ENyvgNtWgxKmAIaNNONwO', '02222222222', '[{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-05T18:33:35.319852Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-06T09:32:28.870460Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-06T09:35:36.338928Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-07T06:15:08.112510Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-07T18:48:46.794446Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-08T05:18:14.469029Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-08T06:11:08.149306Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-09T05:42:06.750954Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-09T11:59:08.079297Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-12T16:51:49.822209Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-13T14:03:18.292513Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-14T14:23:03.864127Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-14T14:26:23.661814Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-14T14:36:05.040760Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-14T15:00:13.324184Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-14T16:07:27.016649Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-14T16:31:53.354690Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-14T16:32:04.389248Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-14T16:32:37.044667Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-15T09:57:31.894086Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-27T14:28:05.493328Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-27T14:30:33.986554Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-27T14:33:54.090355Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-27T14:34:46.746017Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-27T14:36:07.342589Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-27T14:49:04.530527Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-27T15:08:58.766617Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-27T15:17:34.587925Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-27T15:17:42.172501Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-27T15:18:07.713214Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-27T15:27:40.987872Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-27T16:41:50.191244Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-29T10:35:16.313101Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-29T10:36:09.402557Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-07T06:38:32.190500Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-07T06:53:37.065704Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-07T10:44:17.494499Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-08T09:42:40.504226Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-09T03:04:11.827741Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-09T14:39:30.609055Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-09T18:40:23.078550Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-10T17:01:52.795691Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-11T08:34:37.565717Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-11T08:54:58.166364Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-11T09:22:36.819349Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-12T19:05:21.888422Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-13T05:03:47.965252Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-13T17:54:32.523537Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-14T02:42:03.582199Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-14T05:58:20.771140Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-14T08:16:56.819175Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-14T11:23:25.905371Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-14T18:00:06.643408Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-14T19:06:16.803247Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-15T08:33:20.206311Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-15T08:35:52.544504Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-15T08:37:07.669937Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-15T08:38:00.134735Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-15T08:39:24.576929Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-15T17:13:10.726821Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-16T16:56:00.226036Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-16T19:15:05.986500Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-16T19:17:51.682873Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-16T19:20:39.724214Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-16T19:31:44.308980Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-17T05:48:30.953433Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-17T11:29:07.610649Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-18T16:12:36.006507Z\"}]', 1, 'Thịnh Vượng, Lạc Thịnh, Yên Thủy, Hòa Bình', '2024-04-05__322827516-584419606854024-2160951256714875601-n.jpg', NULL, NULL, NULL, '2024-04-05 09:59:47', '2024-05-07 10:46:02'),
(47, 'NTH', 'taihuy123@gmail.com', NULL, '$2y$10$7yf1IPHmId1xjkFvOdPeJu4e14xIUT3PBMVLfWhACC/ntIQBEbXR2', '0359372559', '[{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-04-14T14:21:40.163672Z\"}]', 0, NULL, NULL, NULL, NULL, NULL, '2024-04-14 14:21:13', NULL),
(48, 'Tài Huy', 'huyteo559@gmail.com', NULL, '$2y$10$lhdLSLYxzSDr6iONyR3SX.medYPHFan6aMU8aHK9TUaOoNjRvzfGa', '0123456777', '[{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-07T06:54:20.179647Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-07T07:03:13.704996Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-07T15:53:19.387195Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-09T10:44:37.085789Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-10T17:32:29.946837Z\"},{\"device\":\"WebKit\",\"platform\":\"Windows\",\"platform_ver\":\"10.0\",\"browser\":\"Chrome\",\"browser_ver\":\"121.0.0.0\",\"time\":\"2024-05-14T08:27:37.966047Z\"}]', 0, NULL, NULL, NULL, NULL, NULL, '2024-04-24 08:38:11', NULL),
(49, 'Anh Huy', 'nguyentaihuy02@gmail.com', NULL, '$2y$10$ZIa9JTwqAJFqhMGYLB/iYelGgLtrV3HxbvT6D68Mg5EVNOtyoStzG', '359372560', NULL, 0, NULL, NULL, NULL, NULL, NULL, '2024-05-09 10:50:22', NULL),
(50, 'Nguyễn Tài Huy', 'taihuy1234@gmail.com', NULL, '$2y$10$D646UK4O1vbY3TP5ZWKvL.pIqlNqKsL1a9mUOvY8w8CzwLtTDp5GK', '0123456789', NULL, 0, NULL, NULL, NULL, NULL, NULL, '2024-05-17 05:17:29', NULL),
(51, 'Nguyễn Tài Huy', 'luandb1@gmail.com', NULL, '$2y$10$uawCYGL5g2Rg5sNCuxwSsOU8EJqXHaVG7pX0UqssoeLsAdjoqkIm.', '03593725594', NULL, 0, NULL, NULL, NULL, NULL, NULL, '2024-05-20 09:51:12', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`),
  ADD UNIQUE KEY `admins_phone_unique` (`phone`);

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `articles_a_slug_index` (`a_slug`),
  ADD KEY `articles_a_hot_index` (`a_hot`),
  ADD KEY `articles_a_active_index` (`a_active`),
  ADD KEY `articles_a_menu_id_index` (`a_menu_id`);

--
-- Indexes for table `attributes`
--
ALTER TABLE `attributes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `attributes_atb_name_unique` (`atb_name`),
  ADD KEY `attributes_atb_type_id_index` (`atb_type_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_c_slug_unique` (`c_slug`),
  ADD KEY `categories_c_parent_id_index` (`c_parent_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_cmt_parent_id_index` (`cmt_parent_id`),
  ADD KEY `comments_cmt_product_id_index` (`cmt_product_id`),
  ADD KEY `comments_cmt_admin_id_index` (`cmt_admin_id`),
  ADD KEY `comments_cmt_user_id_index` (`cmt_user_id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `discount_code`
--
ALTER TABLE `discount_code`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `discount_code_d_code_unique` (`d_code`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `keywords`
--
ALTER TABLE `keywords`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `keywords_k_slug_unique` (`k_slug`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `menus_mn_slug_unique` (`mn_slug`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `momo`
--
ALTER TABLE `momo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `producer`
--
ALTER TABLE `producer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `producer_pdr_slug_unique` (`pdr_slug`),
  ADD UNIQUE KEY `producer_pdr_email_unique` (`pdr_email`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `products_pro_slug_unique` (`pro_slug`),
  ADD KEY `products_pro_hot_index` (`pro_hot`),
  ADD KEY `products_pro_active_index` (`pro_active`);

--
-- Indexes for table `products_attributes`
--
ALTER TABLE `products_attributes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_attributes_pa_product_id_index` (`pa_product_id`),
  ADD KEY `products_attributes_pa_attribute_id_index` (`pa_attribute_id`);

--
-- Indexes for table `products_keywords`
--
ALTER TABLE `products_keywords`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_keywords_pk_product_id_index` (`pk_product_id`),
  ADD KEY `products_keywords_pk_keyword_id_index` (`pk_keyword_id`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `slides`
--
ALTER TABLE `slides`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `statics`
--
ALTER TABLE `statics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactions_tst_user_id_index` (`tst_user_id`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `types_t_name_unique` (`t_name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_phone_unique` (`phone`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `attributes`
--
ALTER TABLE `attributes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `discount_code`
--
ALTER TABLE `discount_code`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `keywords`
--
ALTER TABLE `keywords`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `momo`
--
ALTER TABLE `momo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `producer`
--
ALTER TABLE `producer`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `products_attributes`
--
ALTER TABLE `products_attributes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=243;

--
-- AUTO_INCREMENT for table `products_keywords`
--
ALTER TABLE `products_keywords`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `slides`
--
ALTER TABLE `slides`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `statics`
--
ALTER TABLE `statics`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `types`
--
ALTER TABLE `types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
