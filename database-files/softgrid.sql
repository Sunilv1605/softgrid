-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 15, 2020 at 11:12 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `softgrid`
--

-- --------------------------------------------------------

--
-- Table structure for table `sg_api_transactions`
--

CREATE TABLE `sg_api_transactions` (
  `id` int(11) NOT NULL,
  `token` text NOT NULL,
  `record_date` datetime NOT NULL DEFAULT current_timestamp(),
  `ip` varchar(50) NOT NULL,
  `status` enum('0','1') NOT NULL COMMENT '0 for fail, 1 for success'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sg_api_transactions`
--

INSERT INTO `sg_api_transactions` (`id`, `token`, `record_date`, `ip`, `status`) VALUES
(1, 'bearer qweqwrqwDafas', '2020-08-15 10:45:27', '', '1'),
(2, 'Bearer Apartner', '2020-08-15 10:51:43', '', '1'),
(3, 'Bearer partnerA', '2020-08-15 11:15:25', '', '1'),
(4, 'Bearer partnerA', '2020-08-15 11:24:10', '::1', '1'),
(5, 'Bearer partnerA', '2020-08-15 11:58:55', '::1', '1'),
(6, 'Bearer partnerA', '2020-08-15 11:59:27', '::1', '1'),
(7, 'Bearer partnerA', '2020-08-15 12:00:02', '::1', '1'),
(8, 'Bearer partnerA', '2020-08-15 12:00:52', '::1', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sg_api_transactions`
--
ALTER TABLE `sg_api_transactions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sg_api_transactions`
--
ALTER TABLE `sg_api_transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
