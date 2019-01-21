-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-10-05 19:39:28
-- 服务器版本： 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `servicedesign`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(25) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`, `name`) VALUES
(1, 'admin@root.com', '8476f51730fcc138775474b5adbb565d', 'admin'),
(2, 'root@root.com', '8476f51730fcc138775474b5adbb565d', 'sdman');

-- --------------------------------------------------------

--
-- 表的结构 `s_tn`
--

CREATE TABLE `s_tn` (
  `tn_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `tn_name` varchar(100) CHARACTER SET utf8 NOT NULL,
  `tn_dc` text CHARACTER SET utf8 NOT NULL,
  `tn_is` text CHARACTER SET utf8 NOT NULL,
  `tn_rf` text CHARACTER SET utf8 NOT NULL,
  `tn_dp` varchar(25) CHARACTER SET utf8 NOT NULL,
  `tn_td` varchar(25) CHARACTER SET utf8 NOT NULL,
  `tn_d` varchar(25) CHARACTER SET utf8 NOT NULL,
  `tn_up` varchar(25) CHARACTER SET utf8 NOT NULL,
  `tn_et` varchar(25) CHARACTER SET utf8 NOT NULL,
  `tn_tag0` varchar(25) CHARACTER SET utf8 NOT NULL,
  `tn_tag1` varchar(25) CHARACTER SET utf8 NOT NULL,
  `tn_tag2` varchar(25) CHARACTER SET utf8 NOT NULL,
  `tn_tag3` varchar(25) CHARACTER SET utf8 NOT NULL,
  `tn_tag4` varchar(25) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `s_tn`
--

INSERT INTO `s_tn` (`tn_id`, `user_id`, `tn_name`, `tn_dc`, `tn_is`, `tn_rf`, `tn_dp`, `tn_td`, `tn_d`, `tn_up`, `tn_et`, `tn_tag0`, `tn_tag1`, `tn_tag2`, `tn_tag3`, `tn_tag4`) VALUES
(6, 5, '11', '       22', '       33', '       44', 'Choose Design Phase', 'Choose Time Dependency', 'Choose Duration', 'Choose User Participation', '11', '1', '2', '3', '', ''),
(10, 5, '3', ' 3', ' 3', ' 3', 'Choose Design Phase', 'Choose Time Dependency', 'Choose Duration', 'Choose User Participation', '3', '', '', '', '', ''),
(11, 5, '333', '33', '3', '3', 'Choose Design Phase', 'Choose Time Dependency', 'Choose Duration', 'Choose User Participation', 'Choose Evaluation Type', '', '', '', '', ''),
(12, 5, '1', '2', '3', '4', 'Choose Design Phase', 'Choose Time Dependency', 'Choose Duration', 'Choose User Participation', 'Choose Evaluation Type', '', '', '', '', ''),
(13, 5, '1', '2', '3', '4', 'Choose Design Phase', 'Choose Time Dependency', 'Choose Duration', 'Choose User Participation', 'Choose Evaluation Type', '', '', '', '', '');

-- --------------------------------------------------------

--
-- 表的结构 `timo_log`
--

CREATE TABLE `timo_log` (
  `id` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_say` varchar(50) NOT NULL,
  `project_dp` varchar(25) NOT NULL,
  `project_d` varchar(25) NOT NULL,
  `project_up` varchar(25) NOT NULL,
  `project_name` varchar(25) NOT NULL,
  `project_tn` text NOT NULL,
  `if_help` varchar(10) NOT NULL,
  `feedback` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `timo_log`
--

INSERT INTO `timo_log` (`id`, `timestamp`, `user_say`, `project_dp`, `project_d`, `project_up`, `project_name`, `project_tn`, `if_help`, `feedback`) VALUES
(1, '2018-10-04 14:34:52', 'undefined', 'High-Fidelity Prototyping', 'Short-Term Study', 'User Absence', 'undefined', '/3-12-3 Brainstorming/Content Inventory & Audit/Value Mapping/User Story', 'no', 'no-feedback'),
(2, '2018-10-05 10:12:59', 'undefined', 'Planning', 'Long-Term Study', 'User Attendance', 'undefined', 'undefined/Graffiti Walls/Mental Model Diagramming/Photo Diary/Photo Elicitation Interviewing', 'yes', 'no-feedback'),
(3, '2018-10-05 14:42:58', 'undefined', 'High-Fidelity Prototyping', 'Long-Term Study', 'User Absence', 'sssseer', 'undefined/Parallel Prototyping/Directed Storytelling/UX Curve/Experience Prototyping', 'yes', 'timo very good');

-- --------------------------------------------------------

--
-- 表的结构 `tn_info`
--

CREATE TABLE `tn_info` (
  `tn_id` int(11) NOT NULL,
  `tn_name` varchar(100) NOT NULL,
  `tn_img` varchar(25) NOT NULL,
  `tn_dc` text NOT NULL,
  `tn_is` text NOT NULL,
  `tn_rf` text CHARACTER SET utf8 COLLATE utf8_german2_ci NOT NULL,
  `tn_dp` varchar(25) NOT NULL,
  `tn_td` varchar(25) NOT NULL,
  `tn_d` varchar(25) NOT NULL,
  `tn_up` varchar(25) NOT NULL,
  `tn_et` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `tn_info`
--

INSERT INTO `tn_info` (`tn_id`, `tn_name`, `tn_img`, `tn_dc`, `tn_is`, `tn_rf`, `tn_dp`, `tn_td`, `tn_d`, `tn_up`, `tn_et`) VALUES
(1, '3-12-3 Brainstorming', '1.jpg', '3-12-3 Brainstorming is a brainstorming technique with a fixed time limit. The numbers 3-12-3 refer to the number of minutes for each of the three activities: generating, conceptualizing, and discussing ideas.', '1. Ask the participants to test a functional prototype\n2. After using the prototype, ask the participants to indicate their emotions on a 3E template (e.g., draw a face into the human figure) \n3. The drawings can be enriched by speech or thought bubbles, so that the participants can write down further explanations of their emotions\n4. Discuss the emotional feedback based on participants\' drawings and explanations\n', '1. Lawley, B., & Schure, P. (2017). Product management for dummies (1st ed.). John Wiley & Sons.\n2. Gray, D., Brown, S., & Macanufo, J. (2010). Gamestorming (1st ed.). O\'Reilly.\n3. http://gamestorming.com/games-for-design/3-12-3-brainstorm/\n4. https://www.slideshare.net/artmassive/ux-methods-training (slide 45)\n', 'Planning', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(2, '3E (Expressing Experiences and Emotions)', '2.jpg', 'The 3E (Expressing Emotions and Experience) technique is used to gather emotional feedback and experiences of users. Users are encouraged to express emotions after the use of a product or service by writing and drawing them into a 3E template (a simple picture template in form of a sketched human body).', '1. Prepare two versions of a design\n2. Decide which characteristics of the two versions (e.g., features, functions) are to be compared with each other\n3. Divide of a group of participants into two groups; each group tests a version of the design \n4. Observe the activities and performance of the participants\n5. Collect and analyze the results', '1. Taehti, M. and Niemelae, M. (2006) 3E ?C \'Expressing Emotions and Experiences\', in Proceeding of WP9 Workshop on Innovative Approaches for Evaluating Affective Systems. Stockholm.\n2. Rivero, L., Rivero, L. and Conte, T. (2015) \'Using a study to assess user eXperience evaluation methods from the point of view of users\', in In Proceedings of the 17th International Conference on Enterprise Information Systems. Barcelona, Spain, pp. 88?C95.\n3. Yong, L. T. (2013) \'User Experience Testing: A Case Study for Mobile Devices\', Journal of Electronic Systems, 3(3), pp. 98?C108.\n', 'High-Fidelity Prototyping', 'Retrospective', 'Short-Term Study', 'User Attendance', 'Questionnaire'),
(3, '6-3-5 Brainwriting', '3.jpg', '6-3-5 Brainwriting is a technique, that enables a group to develop 108 ideas through silent writing or sketching. Six people create three ideas that are refined five times.\n', '1. Define a topic or a problem\n2. Prepare six sheets of paper with a table of three columns and six rows and hand one sheet to each participant\n3. Every participant silently generates three ideas on the topic or problem and writes them to each cell in the top and empty rows of the table\n4. After 5 minutes, all participants push their paper to the neighboring participant - all in the same direction \n5. Repeat the steps 3 and 4 five times\n6. Discuss the generated ideas, eliminate duplicates, and select appropriate solutions\n', '1. Rohrbach, B., 1969. Kreativ nach regeln. Absatzwirtschaft, 12, 73-75.\n2. Wodehouse, A. and Ion, W. (2012) \'Augmenting the 6-3-5 method with design information\', Research in Engineering Design, 23(1), pp. 5?C15. doi: 10.1007/s00163-011-0110-0.Vattam, S.,\n3. S., Wood, K. L. and Markman, A. B. (2008) \'Increasing Innovation: Presentation and evaluation of the wordtree design-by-analogy method\', Proceedings of the ASME 2008 International Design Engineering Technical Conferences & Computers and Information in Engineering Conference IDETC/CIE, pp. 1?C12. doi: DETC2008-49317.\n', 'Planning', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(4, 'A/B Testing', '4.jpg', 'A/B Testing (also known as split testing) is a technique to compare two versions of a design to see which one works better. The technique is particularly useful to compare a new design with an existing one before the release.\n', '1. Interview different actors and ask them how they are involved in a service system and what goals they pursue\n2. Capture the central actor of a service system and his or her function in the middle of a big sheet of paper (or use a mapping tool)\n3. Position the other actors and their functions around the central actor and connect all actors according to their mutual relations\n4. Analyze how different actors are related to each other', '1. Nielsen, Jakob. \"Putting A/B Testing in Its Place,\" 2005, http://www.useit.com\n2. Kahavi, Ron, Randal M. Henne, and Dan Sommerfield. \"Practical Guide to Controlled Experiments on the Web: Listen to Your Customer Not to the HiPPO.\" Proceedings of the 13th ACM SIGKDD, 2007.\n', 'High-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Experiment'),
(5, 'Actors Mapping', '5.jpg', 'An Actors Map visualizes in the form of a network how actors relate to each other. It displays the functions and roles of different actors in a systemic view of a service and the context in which it operates. ', '1. Collect information related to a pre-defined topic or problem (e.g., by interviews or via brainstorming)\n2. Write down central information on sticky notes and stick them to a wall\n3. Read and sort the information on the notes (the notes can be grouped to show a common idea, problem, or solution based on the similarity of the cards)\n4. Develop affinity heading cards for each group of information and place them on the top of the groups\n5. \"Walk the wall\" and use the sorted information to achieve new insights and ideas instead of giving definitions to the groups\n6. Discuss the notes on the wall and come to a shared decision', '1. http://www.openp2pdesign.org/2009/complexity/net-map-toolbox-a-social-network-analisys-tool-for-community-locality-systems-projects/?lp_lang_pref=it\n2. https://mofafoodsecurity.wordpress.com/test-page/tool-box/net-mapping/\n3. Broe, C., H.Nielsen, H. Paus, M. K.Thomsen,, Trancity. Project and Process Report for the 7. semester ID. 2003, Aalborg University. School of Architecture and Design: Aalborg.\n4. Morelli, N. and Tollestrup, C. (2006) \'New representations techniques for Desigining\', in Proceedings of the Engineering and Product Design Education Conference, p. 6.\n', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(6, 'Affinity Diagramming', '6.jpg', 'Affinity Diagrams enable teams to organize and analyze a large number of ideas or requirements collected by interviews or brainstorming. Thus, it is especially useful to support a collaborative decision-making process.', '1. Define a service or a product to improve\n2. List all of the attributes of a product, or a service (an attribute is a characteristic of a design)\n3. Describe each attribute in more detail (actual and target characteristics)\n4. Choose the attributes to improve\n5. Generate ideas to improve the attributes (e.g., by applying brainstorming techniques)\n6. Discuss the ideas in a group and decide how to improve the attributes', '1. Judge, T. K., Pyla, P. S., McCrickard, D. S., Harrison, S. and Hartson, H. R. (2008) Studying Group Decision Making in Affinity Diagramming, Department of Computer Science, Virginia Polytechnic Institute & State University.\n2. Harboe, G. and Huang, E. M. (2015) ??Real-World Affinity Diagramming Practices: Bridging the Paper-Digital Gap??, in Proceedings of the 2015 CHI Conference on Human Factors in Computing Systems (CHI??15). Crossings, Seoul: ACM, pp. 95??C104. doi: 10.1145/2702123.2702561.\n', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(7, 'Attribute Listing', '7.jpg', 'Attribute Listing seeks to improve a product or a service by decomposing it into its attributes, analyzing the attributes\' actual and target characteristics, and improving the quality of each attribute.', '1. Prepare a floor plan or map of a given environment\n2. List the behaviors that might be observed during the study (e.g., motions, activities) as well as additional parameters of interest (e.g., time, demographics)\n3. Observe participants and record their behaviors (e.g., motions, activities) on the floor plan or map\n4. Aggregate behaviors of many participants and analyze the result', '1. Martilla, J. A. and James, J. C. (1977) \'Importance-Performance Analysis\', Journal of Marketing, 41(1), pp. 77?C79.\n2. Almanza, B. A., Jaffe, W. and Lin, L. (1994) \'Use of the Service Attribute Matrix To Measure Consumer Satisfaction\', Jornal of Hospitality & Tourism Research, 17(2), pp. 63?C75\n', 'Release', 'Retrospective', 'Short-Term Study', 'User Absence', 'Observation'),
(8, 'Behavioral Mapping', '8.jpg', 'Behavioral Mapping is used to record and track user behavior within a defined environment over time by systematically observing how participants interact with a design space unobtrusively.\n', '1. Prepare some conceptual ideas of a product or service as paper prototypes and define scenarios in which the product or service is used\n2. Identify personas or different roles (e.g., customer, user, troubleshooter) and scenarios\n3. Each participant acts as a different person and uses the prepared prototypes in the pre-defined scenario\n4. Discuss each scenario and draw some sketches to generate ideas for optimizing the prototypes', '1. Cosco, N. G., Moore, R. C. and Islam, M. Z. (2010) \'Behavior mapping: A method for linking preschool physical activity and outdoor design\', Medicine and Science in Sports and Exercise, 42(3), pp. 513?C519. doi: 10.1249/MSS.0b013e3181cea27a.\n2. http://designresearchtechniques.com/casestudies/behavioural-mapping/\n', 'Release', 'Real-Time', 'Long-Term Study', 'User Attendance', 'Observation'),
(9, 'Bodystorming', '9.jpg', 'Bodystorming combines role-play with paper prototypes. Designers immerse themselves in application situations and use paper prototypes. Bodystorming aims to collect emotional feedback and to improve the prototype.', '1. Define a topic or a problem\n2. Give every participant 3 minutes to generate a pool of ideas related to the topic or problem and to write them down on prepared cards (generating)\n3. Split the group of participants into small groups (3 to 4 people per group)\n4. Ask them to develop concepts (e.g., sketches, rough prototypes) for each idea on the cards within 12 minutes (conceptualizing)\n5. Give each group 3 minutes to present their developed concepts and discuss the concepts within the group (discussing) ', '1. Buchenau, M., Francisco, I. S. and Suri, J. F. (2000) \'Experience Prototyping\', in Conference on Designing interactive systems: processes, practices, methods, and techniques, pp. 424?C433. doi: http://doi.acm.org/10.1145/347642.347802.\n2. Simsarian, K. T. (2003) \'Take It to the Next Stage: The Roles of Role Playing in the Design Process\', in CHI \'03 Extended Abstracts on Human Factors in Computing Systems. New York, NY, USA: ACM (CHI EA \'03), pp. 1012?C1013. doi: 10.1145/765891.766123.\n', 'Low-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(10, 'Business Origami', '10.jpg', 'Business Origami enables teams to analyze interactions between people, environments, and artifacts in early phases of a design process. It uses paper cut-outs as representations of different components of a system (e.g., people, places, objects).', '1. Create a usage scenario and paper cut-outs as representations of actors, artifacts, environments, and technologies\n2. Label the different elements\n3. Place the cut-outs on a horizontal board and connect them with arrows to visualize their interactions\n4. Label the arrows if necessary to show how they interact with each other\n5. Analyze the current system or model the cut-outs in different relationships to explore new options', '1. G??zel, oe. (2016). Experience-Based Service Design. In The Handbook of Managing and Marketing Tourism Experiences (pp. 3-20). Emerald Group Publishing Limited.\n2. Zoon, H., Cremers, A., & Eggen, B. (2014). \'Include\', a Toolbox of User Research for Inclusive Design. Creating the Difference, 113-121.\n', 'Low-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(11, 'Closed Card Sorting', '11.jpg', 'Closed card sorting is a useful technique to reflect users\' finding patterns and to structure information to suggest navigations when adding contents to an existing structure.', '1. Select contents and pre-define categories\n2. Prepare cards (30-100 cards, use paper-based cards or an online tool), and recruit participants\n3. Ask the participants to sort contents into the pre-defined categories\n4. Analyze the results to find similarities and differences between cards', '1. http://boxesandarrows.com/card-sorting-a-definitive-guide/\n2. Soranzo, A. and Cooksey, D. (2015) \'Testing Taxonomies?: Beyond Card Sorting The Need for User Testing of Taxonomies\', Bulletin of the Association for information Science and Technology, 41, pp. 34?C39.\n3. Hudson, W. (2014) \'Card Sorting for Navigation Design\', in CHI \'14 Extended Abstracts on Human Factors in Computing Systems. New York, NY, USA: ACM (CHI EA \'14), pp. 1007?C1008. doi: 10.1145/2559206.2567812.\n4. Righi, C., James, J., Beasley, M. and Day, D. (2013) \'Card Sort Analysis Best Practices\', Journal of Usability Studies, 8(3), pp. 69?C89.', 'Planning', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Group Discussion'),
(12, 'Co-Discovery', '12.jpg', 'Co-Discovery seeks to collect experience data in a relaxed way by observing how two participants explore the use of a product or service.', '1. Prepare required materials (e.g., functional prototypes, video/ audio recording), a usage scenario, and tasks for the user test\n2. Form teams of two participants (participants are expected to be friends or familiar with each other) for each session\n3. Choose a moderator to explain the test and guide the discussions.\n4. Take notes or record the exploratory process of the participants as they are use the product or service and comment on their activities\n5. Analyze the recorded data', '1. Jordan, P. W., Thomas, B., McClelland, I. L. and Weerdmeester, B. (1996) Usability Evaluation In Industry. Taylor & Francis Ltd.\n2. Jordan, P. W. (2000) Designing Pleasureable Products. First. New York, NY: Taylor & Francis Inc.\n', 'High-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Observation'),
(13, 'Cognitive Mapping', '13.jpg', 'Cognitive mapping visualizes the cause-effect relationship between related concept to understand how people make sense of a goal. The technique can be used to develop strategies.', '1. Write results from interviews in separated sentences (10-12 words long phases that are separated by concept).\n2. Determine a goal from the sentences and put the goal in the middle of the map.\n3. Identify concepts based on phrases and put them around the goal\n4. Connect concepts and the goal with arrows (cause and effect).\n5. Determine the options and outcomes within each pair of concepts', '1. Pe?a, A., Sossa, H. and Guti??rrez, A. (2007) \'Cognitive maps?: towards a holistic conceptual model\', Expert Systems with Applications, 10(3), pp. 230?C250.\n2. Lee, K.-C. and Kwon, S.-J. (2006) \'The Use of Cognitive Maps and Case-Based Reasoning for B2B Negotiation\', Journal of Management Information Systems, 22(4), pp. 337?C376. doi: 10.2753/MIS0742-1222220412.\n', 'Planning', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(14, 'Cognitive Walkthrough ', '14.jpg', 'Cognitive Walkthrough enables teams to evaluate prototypes from the perspective of a potential user. A fully functional prototype and users are not required.', '1. Describe a fictitious user as the target user (e.g., via a persona)\n2. Define an overall task and associated subtasks for the fictitious user\n3. List all necessary actions for each task (description of how the user should use the product or service)\n4. Go through the actions sequence-by-sequence for each task from the perspective of the fictitious user\n5. For each task, examine whether the user will achieve the expected effect and whether the correct sequence of actions is used in order to achieve the expected effect', '1. Jeffries, R., Miller, J. R., Wharton, C. and Uyeda, K. (1991) \'User interface evaluation in the real world: a comparison of four techniques\', in Proceedings of the SIGCHI conference on Human factors in computing systems, pp. 119?C124. doi: 10.1145/108844.108862.\n2. Rieman, J., Franzke, M. and Redmiles, D. (1995) \'Usability Evaluation with the Cognitive Walkthrough\', in Conference companion on Human factors in computing systems, pp. 387?C388. doi: 10.1145/223355.223735.\n3. Allendoerfer, K., Aluker, S., Panjwani, G., Proctor, J., Sturtz, D., Vukovic, M. and Chen, C. (2005) \'Adapting the cognitive walkthrough method to assess the usability of a knowledge domain visualization\', in Proceedings - IEEE Symposium on Information Visualization, INFO VIS, pp. 195?C202. doi: 10.1109/INFVIS.2005.1532147.\n', 'Low-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Absence', 'Interview'),
(15, 'Collaborative Sketching', '15.jpg', 'Collaborative Sketching aims to generate, evaluate, and refine user interface designs. It improves collaboration between designers and clients, and reduces the time it takes to achieve the desired results.', 'Prepare a large sheet of paper \nStick input information (information to guide the sketching such as flowcharts, sitemaps, or user needs) to the sheet of paper\n1. Ask every participant to create up to six sketches (e.g., in 10 to 15 minutes by using a 6-up template) to design an interface, service, or product \n2. Ask all participants to discuss the sketches and select a preferred one\n3. Ask participants to refine the preferred sketch (e.g., in a 1-up template)\n4. If necessary, return to step 3 to design additional elements of the interface, service, or product\n5. Discuss and evaluate the sketches', '1. https://www.thedesignexchange.org/design_methods/317\n2. https://www.boxuk.com/insight/blog-posts/using-sketchboards-to-design-great-user-interfaces\n3. Geyer, F., Budzinski, J. and Reiterer, H. (2012) \'IdeaVis - A Hybrid Workspace and Interactive Visualization for Paper-based Collaborative Sketching Sessions\', in Proceedings of the Nordic Conference on Human-Computer Interaction (NordiCHI\'12), pp. 331?C340. doi: 10.1145/2399016.2399069.\n4. Sangiorgi, U. B., Beuvens, F. and Vanderdonckt, J. (2012) \'User interface design by collaborative sketching\', in Proceedings of the Designing Interactive Systems Conference on - DIS \'12, p. 378. doi: 10.1145/2317956.2318013.\n', 'Low-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(16, 'Concept Mapping', '16.jpg', 'A concept map is used to organize concepts, which are connected by arrows and link words to visualize a complex system or to explain a new concept. Concepts in a concept map are presented in a downward hierarchy. General concepts are at the top of the map, and specific concepts are at the bottom.', '1. Involve stakeholders in the early phase of a design process and prepare pieces of paper and pens (or online tool).\n2. Determine a problem.\n3. Ask stakeholders questions that clearly specify the problem in step 2 and make notes of the answers\n4. Select 15-20 concepts from answers and put most general concepts at the top and most specific concepts at the bottom\n5. Discuss the concept map and get insights on how to solve the problem.', '1. http://cmap.ihmc.us/docs/theory-of-concept-maps.php', 'Planning', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Group Discussion'),
(17, 'Concurrent Think-Aloud ', '17.jpg', 'Concurrent Think-Aloud is used to reveal the thoughts of participants as they perform a task. By asking participants to verbalize their actions and thoughts, designers gain insights  into the users\' assessment of the detailed functions of a service or product.', '1. Define a task in which the participants use a service or product \n2. Give participants instructions on the task\n3. Ask participants to verbalize their thoughts as they perform the task \n4. After completing the task, ask participants to describe their overall experience with the task\n5. Choose a moderator to make notes during the Think-aloud process', '1. Martin, B. and Hanington, B. (2012) Universal Methods of Design. Beverly: Rockport Publisher.\n2. https://www.thedesignexchange.org/design_methods/228\n', 'High-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Observation'),
(18, 'Content Inventory & Audit', '18.jpg', 'A content inventory is a list of contents on a website (text, image, etc.). Based on the existing contents, a content audit can be made to recommend further improvement of the website.', '1. Involve stakeholders in the early phase of a design process and prepare pieces of paper and pens (or online tool).\n2. Determine a problem.\n3. Ask stakeholders questions that clearly specify the problem in step 2 and make notes of the answers\n4. Select 15-20 concepts from answers and put most general concepts at the top and most specific concepts at the bottom\n5. Discuss the concept map and get insights on how to solve the problem.', '1. https://www.usability.gov/how-to-and-tools/methods/content-inventory.html\n2. http://www.content-insight.com/resources/content-inventory-and-audit-articles/template-content-inventory-and-audit/\n3. https://moz.com/blog/content-audit#4\n4. http://uxmastery.com/how-to-conduct-a-content-audit/\n', 'Release', 'Retrospective', 'Short-Term Study', 'User Absence', 'Observation'),
(19, 'Contextual Laddering', '19.jpg', 'Contextual laddering is a one-to-one interview technique that seeks to capture contents and structure antecedents and outcomes of people\'s experience.', '1. Plan a contextual laddering interview early in the design process before fixated features are decided.\n2. Prepare an interview protocol with several questions to start with \"Why.\"\n3. Analyze the results to understand how people make purchasing decisions.', '1. Reynolds, Thomas J., and Jonathan Gutman. \"A Means-End Chain Model Based on Consumer Categorization Processes.\" Journal of Marketing 46, no. 2 (1982): 60?C72\n2. Schultze, U. and Avital, M. (2011) \'Designing interviews to generate rich data for information systems research\', Information and Organization. Elsevier Ltd, 21(1), pp. 1?C16. doi: 10.1016/j.infoandorg.2010.11.001.\n', 'Planning', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Interview'),
(20, 'Critical Incident Technique', '20.jpg', 'Critical incident technique seeks to gain an understanding of the existing incident from the perspective of the individual and learn how users behave during the incident to generate recommendations for improving further designs.', '1. Gain access to participants.\n2. Define a problem and determine data collection instrument (e.g., clear instruction, story-triggering questions).\n3. Collect data through diary studies or interviews.\n4. Analyze and interpret data (create descriptions of categories, such as incidents, behaviors) and understand service conditions.', '1. Gremler, D.D., 2004. The Critical Incident Technique in Service Research. J. Serv. Res. 7, 65?C89. doi:10.1177/1094670504266138\n2. Chell, E., Pittaway, L., 1998. A study of entrepreneurship in the restaurant and caf?? industry: exploratory work using the critical incident technique as a methodology: Prize-winning Paper from the IAHMS Conference at Sheffield Hallam University, England, November 19971. Int. J. Hosp. Manag. 17, 23?C32. doi:10.1016/S0278-4319(98)00006-1\n', 'Release', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Interview'),
(21, 'Desirability Testing with Product Reaction Cards', '21.jpg', 'Desirability Testing with Product Reaction Cards aims at understanding users\' nebulous, critical feeling of desirability in the user experience. It can be used to compare iterative designs.', '1. Prepare 118 product-reaction cards\n2. Ask every participant take the 3 to 5 cards best suited to their experience after using a service or product\n3. Ask participants to explain how the words on the cards describe their experience\n4. Collect the selected cards and note how often the same cards have been selected by more than one participant to capture the emotional response of users to the service or product', '1. Barnum, M.C., Palmer, A.L., 2010. More Than A Feeling: Understanding the Desirability Factor in User Experience. CHI\'10 Ext. Abstr. Hum. Factors Comput. Syst. 4703?C4716. doi:10.1145/1753846.1754217\n2. Williams, D., Kelly, G., Anderson, L., 2004. MSN 9: New User-centered Desirability Methods Produce Compelling Visual Design, in: CHI \'04 Extended Abstracts on Human Factors in Computing Systems, CHI EA \'04. ACM, New York, NY, USA, pp. 959?C974. doi:10.1145/985921.985952\n', 'Low-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Group Discussion'),
(22, 'Diary Studies', '22.jpg', 'Diary Studies allow teams to capture the thoughts, feelings, and behaviors of users over several days or weeks to understand their long-term habits. ', '1. Define the purpose and timeframe of a diary study\n2. Provide participants with an instruction and a template (with key questions according to the defined purpose) for journalizing (or using an online tool)\n3. Ask participants to regularly document their thoughts, feelings, and experiences in relation to the defined purpose\n4. Check the diaries regularly\n5. Evaluate the collected data to understand user habits', '1. https://www.nngroup.com/articles/diary-studies/', 'Release', 'Retrospective', 'Long-Term Study', 'User Attendance', 'Questionnaire'),
(23, 'Directed Storytelling', '23.jpg', 'Directed Storytelling enables teams to easily gather extensive data about the users\' experiences in order to better understand the users. The technique is useful when time and budget are limited.\n', '1. Prepare guiding questions for the storytelling of participants \n2. Ask participants to \"tell a story about??\"\n3. Document the session (e.g., by using affinity diagramming or recordings) with the goal of finding patterns within and across experiences\n4. Evaluate the information and derive design ideas from it', '1. Martin, B. and Hanington, B. (2012) Universal Methods of Design. Beverly: Rockport Publisher.\n2. Evenson, Shelley. \"Directed Storytelling: Interpreting Experience for Design\" in Design Studies: Theory and Research in Graphic Design, A Reader. New York: Princeton Architectural Press, 2006.\n', 'Planning', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(24, 'Experience Clips', '24.jpg', 'Experience Clips seek to gain insights into the users\' experiences when using a mobile product or service in natural usage situations. One person uses the mobile product or service, which is recorded in video clips by another person. ', '1. Prepare the required equipment (mobile service or product as well as recording devices) and other materials\n2. Introduce the test procedure: i. Ask two participants to work in a group (one uses the mobile product or service, the other one records the video clips) ii. Explain the technical constraints, such as the best distance for recording\n3. Encourage participants to share their experience of using the mobile product or service\n4. Analyze the video clips to understand how users\' emotional states change during use', '1. Isomursu, M., Kuutti, K. and Vaeinaemoe, S. (2004) \'Experience Clip?: Method for User Participation and Evaluation of Mobile Concepts\', in Proceedings of the eighth conference on Participatory design: Artful integration: interweaving media, materials and practices, pp. 83?C92. doi: 10.1145/1011870.1011881.\n2. Vanattenhoven, J. and De Roeck, D. (2010) \'Investigating the use of the Experience Clip method\', Lecture Notes of the Institute for Computer Sciences, Social-Informatics and Telecommunications Engineering, 40 LNICST, pp. 79?C86. doi: 10.1007/978-3-642-12630-7_9.\n3. http://www.allaboutux.org/experience-clip', 'Release', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Observation'),
(25, 'Experience Prototyping', '25.jpg', 'Experience prototyping is carried out when a prototype with existing key elements such as a wireframe is available (no functional prototype, but specific elements are required). This technique helps to understand what it would be like for the user to use the design.\n', '1. Finalize a low-fidelity prototype (key elements need to be included)\n2. Define a specific situation for the simulation\n3. Ask the design team members to act as different roles in the simulation (predefined personas should be included)\n4. Understand the essential factors of the experience with the existing design and improve the design of the low-fidelity prototype', '1. Buchenau, M., Suri, J.F., 2000. Experience Prototyping, in: Conference on Designing Interactive Systems: Processes, Practices, Methods, and Techniques. pp. 424??C433. doi:http://doi.acm.org/10.1145/347642.347802\n2. https://www.thedesignexchange.org/design_methods/13\n', 'Low-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Absence', 'Observation'),
(26, 'Eye-tracking', '26.jpg', 'The eye-tracking technique detects users\' attention to a website by particularly measuring the position of the users\' eyes on the screen (where they are looking), gaze durations (how long they are looking), and saccades (how their focus of attention is moving).', '1. Decide whether to use an eye-tracking device or to use online eye-tracking tools based on a webcam\n2. Prepare high-fidelity prototypes or a live Website/App\n3. Prepare and conduct an eye-tracking lab study (when using an eye-tracking device) or online study (when using a webcam)\n4. Analyze the data (gaze durations, fixations, etc.) and visualize the results (e.g. with heat maps, gaze plots, etc.) to understand users\' browsing habits\n', '1. Pernice, K. and Nielsen, J. (2009) How to Conduct Eyetracking Studies. https://media.nngroup.com/media/reports/free/How_to_Conduct_Eyetracking_Studies.pdf \n2. Nielsen, J. and Pernice, K. (2009) Eyetracking Web Usability. Berkeley, CA: New Riders.\n', 'High-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Experiment'),
(27, 'Flexible Modeling', '27.jpg', 'Flexible Modeling enables design teams to create a prototype together with users by playing around with a predefined set of features of a product\'s or service\'s interface.', '1. Prepare a set of predefined features of a product or service user interface\n2. Ask participants to arrange the features according to their preferences\n3. Observe how participants combine the features and take photos of the combinations\n4. Ask participants to explain their design decisions\n5. Analyze the results to find popular interface options and preferred combinations', '1. Curtis, N. (2009) Modular Web Design: Creating Reusable Components for User Experience Design and Documentation. Berkeley, CA: New Riders. \n2. Sanders, E. B.-N. and William, C. T. (2001) \'Harnessing people\'s creativity: Ideation and expression through visual communication\', in Focus Groups: Supporting Effective Product Development. London: Francis and Taylor. \n3. Martin, B. and Hanington, B. (2012) Universal Methods of Design. Beverly: Rockport Publisher.\n4. Sanders, E. B. (2000) \'Generative Tools for Co-Designing\', in Scrivener, Ball, and Woodcock (eds) Collaborative Design. London: Springer-Verlag, pp. 3?C12. doi: 10.1007/978-1-4471-0779-8_1.\n5. Martin, B., and Hanington, B. 2012. Universal Methods of Design, Beverly: Rockport Publisher.\n', 'Low-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Group Discussion'),
(28, 'Fly-on-the-Wall Observation', '28.jpg', 'The Fly-on-the-Wall (FOTW) technique is an inconspicuous observation of user behavior from a distance. The technique attempts to minimize potential influences from the interaction with people.', '1. Choose a location and activities to be observed\n2. Select one of the following forms of observation (Secret outsider: the observer\'s vantage point is distant from the participants to minimize any influences of the observer\'s presence; Recognized outsider: the participants know about the presence of an observer)\n3. Develop an observation framework with a time frame, defined themes, questions, etc.\n4. Collect and document observations\n5. Analyze the results to understand users\' behavior', '1. https://www.ibm.com/developerworks/library/us-fly/\n2. Martin, B., and Hanington, B. 2012. Universal Methods of Design, Beverly: Rockport Publisher.\n', 'Planning', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Observation'),
(29, 'Graffiti Walls', '29.jpg', 'Graffiti walls enable participants to provide their comments freely by writing or drawing on an open canvas. This technique is very useful to reflect user behaviors in the situation that privacy and ethical issues need to be considered.', '1. Define a theme and decide an environmental space to adhere a large-format paper as a graffiti wall.\n2. Adhere the large-format paper on the wall.\n3. Take photos of each graffiti wall at regular intervals.\n4. Remove the graffiti wall at the end of the study.\n5. Compare and analyze the \"walls\" with \"walls\" collected from other locations.', '1. Hanington, Bruce. \"Methods in the Making: A Perspective on the State of Human Research in Design.\" Design Issues 19, no. 4 (Autumn 2003).\n2. Martin, B. and Hanington, B. (2012) Universal Methods of Design. Beverly: Rockport Publisher.\n3. https://de.slideshare.net/peterroessler/g-wall-presentation\n', 'Planning', 'Real-Time', 'Long-Term Study', 'User Attendance', 'Observation'),
(30, 'Heuristic Evaluation', '30.jpg', 'Heuristic Evaluation enables teams to test the interfaces of their products or services, get feedback and detect usability problems early in the design process.', '1. Find a suitable list of heuristics (Heuristics mean criteria that affect usability; one of the best known sources is Nielsen\'s heuristics)\n2. Select professionals (not end users but usability experts) as evaluators\n3. Give instructions to the evaluators\n4. Ask the evaluators to freely use the product and select specific elements for evaluation\n5. Let the evaluators use the product again and apply the chosen heuristics\n6. Ask the evaluators to record any problems independently\n7. Encourage the evaluators to suggest possible solutions to these problems', '1. Agarwal, R. and Venkatesh, V. (2002) \'Assessing a Firm\'s Web Presence: A Heuristic Evaluation Procedure for the Measurementof Usability\', Information Systems Resea, 13(2), pp. 168?C186. doi: 10.1287/isre.13.2.168.84.\n2. Nielsen, J. (1994) \'Heuristic Evaluation\', in Usability Inspection Methods, pp. 25?C62. doi: 10.1089/tmj.2010.0114.\n3. Martin, B. and Hanington, B. (2012) Universal Methods of Design. Beverly: Rockport Publisher.\n', 'Low-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Absence', 'Questionnaire'),
(31, 'Kano Analysis', '31.jpg', 'Kano Analysis enables teams to assign design features to four product categories based on customer needs (must-be, delighted, indifferent, performance). In addition, it also supports to determine which features have the greatest impact on customer satisfaction.', '1. Select target features \n2. Prepare a questionnaire that covers questions about the target features \n3. Ask 20 to 30 (potential) customers to complete the questionnaire\n4. Analyze the results and visualize each attribute with regard to the Kano categories in a diagram (see the figure on the front page):\n5. Plot the features along the two axes  of the Kano categories (not fulfilled  to well fulfilled and dissatisfied to  satisfied)\n', '1. http://www.kanomodel.com/\n2. Wang, T., Ji, P., 2010. Understanding customer needs through quantitative analysis of Kano\'s model. Int. J. Qual. Reliab. Manag. 27, 173?C184. doi:10.1108/02656711011014294\n3. https://articles.uie.com/kano_model/\n4. Martin, B. and Hanington, B. (2012) Universal Methods of Design. Beverly: Rockport Publisher.\n5. https://www.thedesignexchange.org/design_methods/67\n', 'Planning', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Questionnaire'),
(32, 'LEGO Serious Play', '32.jpg', 'LEGO Serious Play is an innovative process that enhances the generation of ideas and innovative solutions within a group by using LEGO.', '1. Identify a question for the LEGO serious play\n2. Organize a group of 4-8 people\n3. Decide on shared understanding of representations (e.g., what kind of a building block(s) represents a colleague, a customer, etc.)\n4. Build a model (e.g., to show the team goal, to show your role in the team, etc.)\n5. Ask participants to explain their model and share the story with the others\n6. Discuss the results and come to a common solution', '1. https://www.slideshare.net/martinsandberg/lego-serious-play-intro\n2. http://www.servicedesigntools.org/tools/46\n3. Cantoni, L., Marchiori, E., Far??, M., Botturi, L., Bolchini, D., 2009. A systematic methodology to use LEGO bricks in web communication design, in: Proceedings of the 27th ACM International Conference on Design of Communication - SIGDOC \'09. pp. 187?C191. doi:10.1145/1621995.1622032\n', 'Planning', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(33, 'Mental Model Diagramming', '33.jpg', 'Mental Model Diagramming enables teams to analyze whether existing design features are compatible with the behavior, emotions, and beliefs of user and supports them in formulating development strategies.', '1. Collect data (e.g., by conducting interviews, diary studies, or observations) and review the results \n2. Create a Mental Model Diagram as follows: i. The upper half of the diagram contains data on behaviors, beliefs, or emotions; ii. The lower half of the diagram contains the available design features; iii. Arrange the data in a logic order with regard to groups of similar behaviors, beliefs, or emotions and the available design features \n3. Identify opportunities from the diagram for future design', '1) Review results from interviews, diary studies, etc.;\n2) Build the diagram (top half of the diagram includes behaviors, beliefs, or emotions; bottom half of the diagram includes available design features, services);\n3) Group similar behaviors and features;\n4) Identify the opportunities from the diagram for future design;\n5) Use the mental model diagram for further design work. \n', 'Planning', 'Retrospective', 'Long-Term Study', 'User Attendance', 'Group Discussion'),
(34, 'Mind Mapping', '34.jpg', 'Mind mapping seeks to visualize the relationships among many pieces of related information on a problem or a topic, which helps to generate ideas and concepts.', '1. Write a topic in the center (use a piece of paper or online tool).\n2. Create and connect branches, and link connected ideas together.\n3. Use images and colors to make mind map more interesting.\n4. Discuss the mind map.', '1. https://www.thedesignexchange.org/design_methods/69\n2. http://lifehacker.com/how-to-use-mind-maps-to-unleash-your-brains-creativity-1348869811\n3. Martin, B. and Hanington, B. (2012) Universal Methods of Design. Beverly: Rockport Publisher.\n', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(35, 'Mood Boards', '35.jpg', 'Mood Boards are collages of pictures that visualize information that is difficult to describe with words. This technique enables a team to develop a common understanding of an intended final concept at an early stage of the design process.', '1. Prepare materials like cards or paper sheets, pictures, words, shapes, and glue sticks\n2. Ask participants to clarify their views on a given concept and prepare a collage\n3. Ask the participants to present their collages to the group for clarity and insights into the selection and meaning of the images', '1. http://www.servicedesigntools.org/tools/17\n2. http://www.lifeclever.com/5-reasons-to-design-with-mood-boards/ \n', 'Low-Fidelity Prototyping', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(36, 'Motivation Matrix', '36.jpg', 'A Motivation Matrix helps to identify and visualize the connection between the actors and the motivation of each individual actor.', '1. Prepare an empty matrix by listing all stakeholders of a service or product in the first column and in the first row of the matrix \n2. Ask all stakeholders to fill the cells of the matrix, where the same services meet, with how these services can contribute to the project, starting with the top left cell and moving towards the bottom right cell (following the path of the blue boxes on the frontpage) \n3. Ask the actors to fill out the remaining squares with explanations on how the related services connect and interact with the other one \n4. Use the matrix to reflect the roles of actors and their interrelationships', '1. Morelli, N. and Tollestrup, C. (2006) \'New representations techniques for Desigining\', Proceedings of the Engineering and Product Design Education Conference, (September), p. 6.\n2. J??gou, F. and Joore, P. (2004) Food delivery solutions: Cases of solutions oriented partnership. Cranfield: Cranfield University. doi: 10.1017/CBO9781107415324.004.\n3. http://hunting.number41media.com/motivation_matrix/index.html\n', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Questionnaire'),
(37, 'Offering Mapping', '37.jpg', 'Offering Mapping attempts to systematically describe how a service or product is offered to its users, which contributes to detailing a design idea or generating solution ideas for a design.\n', '1. Define a product or service that needs to be defined in detail\n2. Prepare a large format paper, markers, and sticky notes to create the Offering Map\n3. Ask the participants to discuss the overall scope of the product or service\n4. Make sure to include all specific functions and features that are part of an offering in the Offering Map (start with big concepts and go into detail)\n5. Discuss the results and plan the implementation of the potential offers of the product or service', '1. http://www.bsbd.org.uk/cards/offering-map/\n2. http://www.servicedesigntools.org/tools/38\n3. https://www.thedesignexchange.org/design_methods/19\n', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(38, 'Open Card Sorting', '38.jpg', 'Open card sorting means there are no pre-defined categories. Rather, participants give names for the categories they have grouped. The technique is useful for sorting user research findings and structuring contents.', '1. Prepare the cards and recruit participants\n2. Ask the participants to group the cards into categories based on the similarities and differences of the cards\n3. Let participants give each category a name and explain the meaning', 'https://www.thedesignexchange.org/design_methods/199', 'Planning', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Group Discussion'),
(39, 'Parallel Prototyping', '39.jpg', 'Parallel prototyping means simultaneously creating multiple designs, which helps design teams keep from fixating on a design direction too early and lead to more effective design results.', '1. Start prototyping with multiple alternative designs (>=3) at the same time.\n2. Recruit users and conduct user test.\n3. Compare the designs and create a single merged design.\n4. Iterate the merged design.', '1. https://www.nngroup.com/articles/parallel-and-iterative-design/\n2. Dow, S. P., Glassco, A., Kass, J., Schwarz, M., Schwartz, D. L. and Klemmer, S. R. (2010) \'Parallel prototyping leads to better design results, more divergence, and increased self-efficacy\', ACM Transactions on Computer-Human Interaction, 17(4), pp. 1?C24. doi: 10.1145/1879831.1879836.\n', 'Low-Fidelity Prototyping', 'Real-Time', 'Long-Term Study', 'User Absence', 'Group Discussion'),
(40, 'Personas', '40.jpg', 'Personas are fictional profiles of different user types with different needs, goals, and behavioral patterns of potential and real users. A persona makes it possible to humanize the design focus, prepare appropriate test scenarios, and support design communications.\n', '1. Collect as much information and characteristics as possible about the potential users of a product or service\n2. Group different user types into categories based on similarities of their characteristics (create 3-6 groups)\n3. Select the information and characteristics of a user group (e.g., interests, age group, personality) that are relevant for the design of a product or service \n4. Create a persona for each user group by describing in detail a fictional person who represents the selected information and characteristics  \n', '1. Martin, B. and Hanington, B. (2012) Universal Methods of Design. Beverly: Rockport Publisher.\n2. Goodwin, K., Cooper, A., 2009. Designing for the Digital Age: How to Create Human-Centered Products and Services. Wiley Publishing. Inc, Indianapolis, Indiana.\n3. https://www.cooper.com/journal/2001/08/perfecting_your_personas?\n4. https://aycl.uie.com/virtual_seminars/designing_with_scenarios_putting_personas_to_work\n', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(41, 'Photo Diary', '41.jpg', 'Photo diary seeks to help designers to understand users\' surroundings by inviting users to take photos of their lives and interactions.', '1. Identify the purpose of a photo diary\n2. Recruit participants\n3. Ask participants to photograph their surroundings when they are feeling a particular way (energized, sad, overwhelmed), or human interactions\n4. Document collected photo diaries, pay attention to uncomfortable situations\n5. Suggest having follow-up interviews with users and asking them to explain positive?Cnegative interactions', 'Martin, B. and Hanington, B. (2012) Universal Methods of Design. Beverly: Rockport Publisher.', 'Planning', 'Real-Time', 'Long-Term Study', 'User Attendance', 'Questionnaire'),
(42, 'Photo Elicitation Interviewing', '42.jpg', 'Photo Elicitation Interviewing supports teams understand user communities, their experiences, and desires. Photos of everyday activities are used to help people recalling their experience.\n', '1. Define the purpose of the interview\n2. Prepare an interview protocol (time of use, locations, relationships, life events, mental states, and other information associated with the product or service)\n3. Choose a set of photos (which may come from photo diaries) that can help participants remember their experiences of using a product or service (e.g., environment, people)\n4. Instruct participants to sort the photos and remember their experience', '1. Hatten, K., Forin, T.R., Adams, R., 2013. A picture elicits a thousand meanings: Photo elicitation as a method for investigating cross-disciplinary identity development, in: 120th ASEE Annual Conference & Exposition. pp. 1?C21.\n2. Martin, B. and Hanington, B. (2012) Universal Methods of Design. Beverly: Rockport Publisher.\n', 'Planning', 'Retrospective', 'Long-Term Study', 'User Attendance', 'Interview'),
(43, 'Private Camera Conversation', '43.jpg', 'Private Camera Conversations seek to avoid the bias of interviewers by asking participants to talk to a camera about a given topic after using a prototype, service, or product.\n', '1. Define a topic or a problem\n2. Prepare a room with a camera\n3. Brief the participants, and explain the task and process to them\n4. After using the prototype, service or product, ask participants to express their opinions while recording their own conversation (alternatively, participants can also have their Private Camera Conversation at home)\n5. Analyze the recordings\n', '1. Vries, G. de, Hartevelt, M., Oosterholt, R., 1995. Private Camera Conversation: a new method for eliciting user responses? Behav. Inf. Technol. 14, 358?C360. doi:10.1080/01449299508914654\n2. Jordan, P.W., 2003. Designing Pleasurable Products: An Introduction to the New Human Factors. CRC Press.\n', 'High-Fidelity Prototyping', 'Retrospective', 'Short-Term Study', 'User Attendance', 'Interview'),
(44, 'Product Experience Tracker', '44.jpg', 'Product Experience Tracker is used to monitor changes in user satisfaction over time through regular surveys. \n', '1. Create a questionnaire to determine user satisfaction with a product or service\n2. Ask participants to complete an (online) questionnaire as soon as possible (e.g., minutes, hours or a few days) after the actual use of the product use\n3. Repeat the survey on a regular basis (e.g., weekly, monthly)\n4. Analyze the surveys for changes in user satisfaction with the product or service\n', '1. https://hbr.org/2012/09/better-customer-insight-in-real-time\n2. http://www.allaboutux.org/product-experience-tracker\n', 'Release', 'Retrospective', 'Long-Term Study', 'User Attendance', 'Questionnaire');
INSERT INTO `tn_info` (`tn_id`, `tn_name`, `tn_img`, `tn_dc`, `tn_is`, `tn_rf`, `tn_dp`, `tn_td`, `tn_d`, `tn_up`, `tn_et`) VALUES
(45, 'Repertory Grids', '45.jpg', 'Repertory Grids seeks to identify how people interpret their experiences. This is to be achieved by interviewing people to elucidate their personal feelings (friendly?Chostile, bad?Cgood, etc.) when confronted with prototypes.\n', '1. Prepare a set of different prototypes (up to 12) of a service or a product\n2. Prepare a grid listing all prototypes in columns but leave the right- and leftmost columns empty (see front page)\n3. Randomly assign three prototypes from the set to each participant\n4. Ask each participant to identify how one of these three prototypes is different from the other two \n5. Ask the participants to describe this difference with two opposite adjective pairs (e.g. friendly?Chostile and bad?Cgood, etc.) \n6. Collect the adjective pairs from step 4 and write them in the empty right- and leftmost cells of the grid \n7. Ask every participant to rate every prototype on a certain predefined scale (e.g. from 1 to 5) with regard to all the collected adjectives and enter this value into the corresponding empty cells\n8. Analyze the results quantitatively', '1. Baskerville, R.L., Myers, M.D., 2002. Management Information Systems Research Center, University of Minnesota. MIS Q. 26, 1?C14. doi:10.2307/4132321\n2. Hassenzahl, M., Wessler, R., 2000. Capturing Design Space From a User Perspective: The Repertory Grid Technique Revisited. Int. J. Hum. Comput. Interact. 12, 441?C459. doi:10.1207/S15327590IJHC1203&4_13<\n3. http://www.uxmatters.com/mt/archives/2007/12/the-repertory-grid-eliciting-user-experience-comparisons-in-the-customers-voice.php\n', 'Low-Fidelity Prototyping', 'Retrospective', 'Short-Term Study', 'User Attendance', 'Experiment'),
(46, 'Retrospective Think-Aloud', '46.jpg', 'Retrospective Think-Aloud is used to collect participants\' feedback after they complete a task. By asking participants to remember and verbalize their actions and thoughts, designers gain insights into the users\' assessment of the detailed functions of a service or product. \n', '1. Prepare a task in which the participants use a service or product\n2. Provide instructions for the task\n3. Ask participants to silently complete the tasks and record the participants\' activities\n4. After completing the task, show the participants the recordings and ask them to comment on their activities \n5. Ask participants to describe their overall experience with the task\n', '1. https://www.thedesignexchange.org/design_methods/228\n2. Martin, B. and Hanington, B. (2012) Universal Methods of Design. Beverly: Rockport Publisher.\n', 'High-Fidelity Prototyping', 'Retrospective', 'Short-Term Study', 'User Attendance', 'Observation'),
(47, 'Roadmapping', '47.jpg', 'A Roadmap is a canvas that enables design teams to strategically visualize design elements and design activities.\n', '1. Analyze the results from already collected data you want to use for your roadmap (e.g., interviews, observations, questionnaires)\n2. Extract common themes and functions for future designs of a service or product\n3. Prioritize themes and functions based on stages of the development\n4. Analyze how the prioritized themes and functions can be applied to opportunities\n5. Combine themes and functions from the analysis and assign them to the phases of a roadmap as a shared vision for a design team\n', '1. http://best.berkeley.edu/wp-content/uploads/2015/07/Design-Roadmap_2-page-slides.pptx.pdf\n2. https://www.thedesignexchange.org/design_methods/328\n', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(48, 'Role-Playing', '48.jpg', 'Role-Playing helps to gain deep insights into user habits and find challenges and opportunities by simulating user roles in a scenario.\n', '1. Select a usage scenario and a corresponding task for a service or product\n2. Prepare roles for different stakeholders of the service or product (e.g., by using personas)\n3. Assign the different roles to the participants\n4. Ask the participants to fulfill the task in the given usage scenario and to play their role\n5. Capture the Role-Playing session by taking photos, notes, or videos\n6. Discuss the perspectives of each stakeholder \n', '1. Martin, B. and Hanington, B. (2012) Universal Methods of Design. Beverly: Rockport Publisher.', 'Planning', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(49, 'Scenarios', '49.jpg', 'A Scenario is a narrative that explains the future use of a service or product from a user\'s point of view. It is designed to help design teams understand the usage environment of people\'s daily life.\n', '1. Analyze results from already collected collection (e.g., interviews, observations, think-aloud sessions) \n2. Describe the use of a service or product to accomplishing a given task in an easy-to-understand language\n3. Include all relevant aspects of the interaction (e.g., continuous interruptions through telephone calls can be relevant for the use of a software platform)\n4. Review and refine the scenarios\n', '1. Martin, B. and Hanington, B. (2012) Universal Methods of Design. Beverly: Rockport Publisher.\n2. http://infodesign.com.au/usabilityresources/scenarios/\n', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(50, 'Sentence Completion', '50.jpg', 'Sentence completion is a technique for creating a questionnaire that includes a set of beginnings of sentences, which enables users to think about their experience after using a service.', '1. Identify the purpose\n2. Create a questionnaire with a set of beginnings of sentences\n3. Recruit participants\n4. Send out questionnaire\n5. Collect sentences\n6. Analyze user experience', '1. Kujala, S. and Nurkka, P. (2012). Sentence Completion for Evaluating Symbolic Meaning. International Journal of Design, 6, 3, 15-25. http://ijdesign.org/ojs/index.php/IJDesign/article/view/1166/523 \n2. Kujala, S., Walsh, T., Nurkka, T., Crisan, M. (2013). Sentence Completion for Understanding Users and Evaluating User Experience. Interacting with Computers, 26, 3, 238-255.\n', 'Planning', 'Retrospective', 'Short-Term Study', 'User Attendance', 'Questionnaire'),
(51, 'Service Blueprints', '51.jpg', 'Service Blueprints visualize key activities and connections between activities in service processes from the customer\'s point of view. Blueprints help to generate service innovations and improve service quality and customer experience.\n', '1. Determine the service process that should be \"blueprinted\"\n2. Ask the participants (it is suggested to bring in people from cross-functional teams or customers) to enter: Customers\' activities, Employees\' frontstage and backstage activities, Underlying support processes into the blueprint\n3. Link customers\' and employees\' activities and the support processes\n4. Use the service blueprint to develop a new service or optimize an existing one\n', '1. Patricio, L., Fisk, R. P., Falcao e Cunha, J., and Constantine, L. 2011. \"Multilevel Service Design: From Customer Value Constellation to Service Experience Blueprinting,\" Journal of Service Research, (14:2), pp. 180?C200 (doi: 10.1177/1094670511401901).\n2. Bitner, M. J., Ostrom, A. L., and Morgan, F. N. 2008. \"Service Blueprinting: A Practical Technique for Service Innovation,\" California Management Review, (50:3), pp. 66?C94 (doi: 10.2307/41166446).\n3. https://dl.dropboxusercontent.com/u/17200095/Kimbell_book_methods/SIH-method12.pdf\n4. https://www.slideshare.net/vicku1111/service-blueprint\n', 'Planning', 'Retrospective', 'Short-Term Study', 'User Attendance', 'Group Discussion'),
(52, 'Shadowing', '52.jpg', 'Shadowing enables teams to understand user behavior by observing users in a natural environment.\n', '1. Select a venue and suitable persons within that venue to be observed \n2. Track and observe a person over a defined period of time\n3. Make field notes and recordings from the observations\n4. Analyze the information collected during the shadowing period \n', '1. https://www.interaction-design.org/literature/article/shadowing-in-user-research-do-you-see-what-they-see\n2. http://designresearchtechniques.com/casestudies/shadowing/\n', 'Planning', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Observation'),
(53, 'Six Thinking Hats', '53.jpg', 'Six Thinking Hats technique encourages people to think of a topic from different perspectives. It is effective and can be applied immediately in a team. Team members can separate thinkings into six categories (facts, emotions, risks, creativity, optimism and thinking process).', '1. Ask each team member to adopt a same perspective at the same time\n2. All the team members contribute to the discussions from each perspective by following a procedure (facts, emotions, risks, optimism, creativity, process control to decide which hat is the most suitable for the decision-making)', '1. http://www.debonogroup.com/six_thinking_hats.php\n2. https://slidemodel.com/templates/de-bonos-six-thinking-hats-powerpoint-template/\nTool: 1. http://diytoolkit.org/tools/thinking-hats/', 'Planning', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(54, 'Speed Dating', '54.jpg', 'Speed Dating helps to create low-cost, fast comparisons of design opportunities before the development of expensive prototypes.\n', '1. Use storyboards to prioritize user needs and determine the target environment to be simulated\n2. Build a fictional environment and low-fidelity prototypes for a given task\n3. Present a relevant scenario with a lead question to a small group of target users\n4. Ask each target user to play a role and conduct the given task by using the prototypes within the fictional environment\n5. Conduct follow-up interviews\n', '1. Davidoff, S., Lee, M.K., Dey, A.K., Zimmerman, J., 2007. Rapidly Exploring Application Design Through Speed Dating, in: Proceedings of The International Conference on Ubiquitous Computing (UbiComp\'07). pp. 429?C446. doi:10.1007/11853565_2', 'Low-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Observation'),
(55, 'Stakeholder Maps', '55.jpg', 'Stakeholder maps enable a team to visualize the consolidate and communication between key constituents of a design project at the beginning of the design process.', '1. Invite people who will benefit from the project\n2. Start with team brainstorming\n3. List roles (students, managers, etc.) of stakeholders\n4. Sketch relationships between stakeholders into an organized structure, defining possible hierarchies between roles\n5. Use the stakeholder map to guide appropriate communication with stakeholders throughout the project development process', '1. Martin, B. and Hanington, B. (2012) Universal Methods of Design. Beverly: Rockport Publisher.', 'Planning', 'Retrospective', 'Short-Term Study', 'User Attendance', 'Group Discussion'),
(56, 'Stakeholder Walkthrough', '56.jpg', 'A Stakeholder Walkthrough helps end users, stakeholders, and the team evaluate early prototypes. It also offers users and stakeholders the opportunity to make actionable recommendations for improvements.\n', '1. Define the scope and objectives of the walkthrough \n2. Define an overall task and the related subtasks\n3. Ask participants (representatives of end users, development team and other stakeholders; less than 20 people) to discuss the usage of prototypes of a service or product to fulfill the pre-defined task\n4. Make notes on how people use the prototypes of the service or product to fulfill the task\n5. Discuss and analyze how to solve problems that have occurred during the walkthrough', '1. Martin, B. and Hanington, B. (2012) Universal Methods of Design. Beverly: Rockport Publisher.\n2. Bias, Randolph G. \"The Pluralistic Usability Walkthrough: Coordinated Empathies\" in Usability Inspection Methods. New York: John Wiley & Sons, 1994.\n3. http://www.uxmatters.com/mt/archives/2007/06/walking-through-your-product-design-with-stakeholders.php\n', 'Low-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Group Discussion'),
(57, 'Story Sharing', '57.jpg', 'Story Sharing enables a team to find common ways of using a service or product in different usage contexts to generate opportunities and solutions.\n', '1. Encourage participants to brainstorm various design alternatives for a service or product\n2. Ask the participants to individually sketch storyboards describing the usage environment, visual/audible/tactile cues, user inputs, outputs, user emotions, technologies, experiences, etc.\n3. Compare the storyboards, discuss the ideas, and choose an alternative design\n', '1. Shen, C., Lesh, N., Vernier, F., 2003. Personal digital historian: story sharing around the table. Interactions 10, 15. doi:10.1145/637848.637856\n2. https://hcd-connect-production.s3.amazonaws.com/toolkit/en/download/ideo_hcd_toolkit_final_cc_superlr.pdf\n3. http://www.designkit.org/methods/13\n', 'Planning', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(58, 'Storyboarding', '58.jpg', 'Storyboarding is a visual representation of the interaction between users and products or services. It covers a sequence of images describing environments, users, and products. This technique helps to generate design alternatives in the early phase of a design process.\n', '1. Prepare post-its and markers as well as a large-format sheet of paper\n2. Gather the participants together in a room with plenty of wall space (each participant should have conducted in-depth interviews with people in the field)\n3. Ask each participant to tell their teammates the most compelling stories from the interviews\n4. Ask participants to document their thoughts to the stories on post-its\n5. Organize the post-its on the wall and consider the shared information to imagine opportunities and solutions', '1. Truong, K. N., Hayes, G. R., and Abowd, G. D. 2006. \"Storyboarding: an empirical determination of best practices and effective guidelines,\" in Proceedings of the 6th ACM conference on Designing Interactive systems - DIS \'06, pp. 12?C21 (doi: 10.1145/1142405.1142410).\n2. Curtis, G., and Vertelney, L. 1990. \"Storyboards and Sketch Prototypes for Rapid Interface Visualization,\" in Tutorial 33, CHI \'90 (available at http://ecologylab.net/courses/hcc/hostedMaterials/curtisVertelneyChi90Storyboards.pdf).\n', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(59, 'Territory Maps', '59.jpg', 'Territory maps seek to present a shared version of the contribution of each team member in a design team. Creating territory maps at the early stage of the design process cannot only visualize the collaboration between team members, but also fosters and maintains the focus of design activities.', '1. Tell each member to consider their contributions on their own (consider the trends, ideas, and stakeholders they deem important to the topic to provide context for their choices).\n2. Bring the collected contributions together in a group.\n3. Based on the contributions of each person come to a shared vision.\n', '1. Martin, B., Hanington, B., 2012. Universal Methods of Design. Rockport Publisher, Beverly.\n2. Burke, P., Nguyen, S., Sun, P. F., Evenson, S., Kim, J., Wright, L., ... & Patel, A. (2005, November). Writing the BoK: designing for the networked learning environment of college students. In Proceedings of the 2005 conference on Designing for User eXperience (p. 32). AIGA: American Institute of Graphic Arts.\n', 'Planning', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(60, 'The Love Letter & the Breakdown Letter', '60.jpg', 'The love letter and the breakup letter enable people to express their sentiments about a product or a service, which gain insights into values and expectations in daily life.', '1. Decide how many letters you would like to have and what the character is of the insights you are gathering.\n2. Gather a group of people.\n3. Tell participants to spend no more than 10 minutes to write a love letter or a breakup letter to a product or a service.\n4. Ask participants to present their letters and record the process.\n5. Go through all letters and videos (nonverbal cues like voices) to find out what elements influence the relationships between people and a product or a service.', '1. https://vimeo.com/11854531\n2. http://medialabamsterdam.com/toolkit/method-card/break-uplove-letter/\n', 'Planning', 'Retrospective', 'Short-Term Study', 'User Attendance', 'Questionnaire'),
(61, 'Tomorrow Headlines', '61.jpg', 'Tomorrow Headlines are fictional articles that seek to illustrate how a new service or product idea or concept will influence the daily life of users or society in the future.\n', '1. Ask participants to imagine themselves in future\n2. Ask participants to write headlines of newspaper articles that reflect the vision of a product or service\n3. Place the headlines on a wall and present them\n4. Analyze the different directions of visions of a product or a service\n', '1. http://www.servicedesigntools.org/tools/14\n2. Moritz, S. (2010) Service Design: Practical Access to an Evolving Field. KISD. doi: 10.1089/tmj.2010.0201.\n3. https://experience.sap.com/skillup/newspaper-exercise/\n', 'Planning', 'Real-Time', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(62, 'Touchpoint Matrix', '62.jpg', 'A Touchpoint Matrix visualizes the interaction of users with the different touchpoints in the product-service system. The technique can be used to analyze an existing service system as well as to support a design concept phase.\n', '1. Prepare a Touchpoint Matrix (First row: List the main functions of a service or product; First column: List the touchpoints (touchpoints are elements with which users come into contact during the experience))\n2. Ask participants to take on the role of a persona and to imagine their journey through different touchpoints\n3. Mark the touchpoints and functions with sticky dots in the respective cell and connect the corresponding dots \n4. Highlight design opportunities and user requirements\n', '1. http://www.servicedesigntools.org/tools/108\n2. Brugnoli, G. (2011) \'Connecting the Dots of User Experience\', Journal of Information Architecture, 1(1), pp. 6?C15.\n', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Observation'),
(63, 'User Journey Maps', '63.jpg', 'User Journey Maps visualize the interactions and touchpoints of users with a product or service in a procedural way. It enables teams to identify pain points. A shared version of a user journey map helps a team optimize a service or product before it comes to a released version. \n', '1. Define the usage process of a product or service\n2. Identify individual touchpoints (people, information, products, etc.) within each process stage\n3. Draw a timeline for the time period that corresponds to an activity of interest\n4. Link the touchpoints\n5. Discuss the user journey map in the team and identify problems and solutions\n', '1. Yoo, J. and Pan, Y. (2014) \'Expanded Customer Journey Map: Interaction Mapping Framework Based on Scenario\', in International Conference, HCI International 2014, pp. 550?C555. doi: 10.1007/978-3-319-07854-0_96.\n2. Davies, U. and Wilson, K. (2013) Design methods for developing services. London.\n', 'Low-Fidelity Prototyping', 'Retrospective', 'Short-Term Study', 'User Attendance', 'Observation'),
(64, 'User Story', '64.jpg', 'User stories are the general-purpose agile substitute for what traditionally has been referred to as software requirements. User stories describe system requirements from a user perspective, which are?brief statements of intent?that describe an action that a user wants to perform through the system to achieve a benefit.?', '1. Interview target users to understand user roles, goals, and values relate to your service\n2. Summarize the information from interviews\n3. Articulate the summary in a standard user-voice form : \"As a?<user role>,?I can?<action>?so that?<benefit>\"\n4. Make sure the user story focuses on describing a \"problem\" rather than a distinct solution\n5. A well-formed user story should be:\n    Independent of each other\n    Negotiable: can be discussed in team \n    Valuable: valuable for users\n    Estimable: enough information\n    Small: small and concise\n    Testable: can be easily tested', '1. https://www.romanpichler.com/blog/10-tips-writing-good-user-stories/\n2. https://www.atlassian.com/agile/project-management/user-stories', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(65, 'UX Curve', '65.jpg', 'UX Curve supports users in retrieving details of interactive experiences with a product or a service. A UX curve is designed to illustrate how relationships between users and products or services evolve over time. \n', '1. Recruit participants for a Long-Term Study (3 to 12 months)\n2. Ask participants to use a product or a service and distribute five empty UX curve templates to each participant\n3. Ask the participants to draw a curve into the templates for the course of time displaying the: Experiences when using the product or service, Attractiveness of the product or service, Ease of using the product or service, Utility of the product or service, Degree of usage\n4. Collect and analyze the results to see how the user experience changes over time\n', '1. Kujala, S., Roto, V., Kaisa V??n?nen-Vainio-Mattila, E.K., Sinnel?, A., 2011. UX Curve: A method for evaluating long-term user experience. Interact. Comput. 23, 473??C483. doi:10.1016/j.intcom.2011.06.005\n2. Walsh, T., Varsaluoma, J., Kujala, S., Nurkka, P., Petrie, H., Power, C., 2014. Axe UX?: Exploring Long-Term User Experience with iScale and AttrakDiff. Proc. 18th Int. Acad. MindTrek Conf. Media Business, Manag. Content Serv. 32??C39. doi:10.1145/2676467.2676480\n3. Karapanos, E., Martens, J.-B., Hassenzahl, M., 2010. On the retrospective assessment of users?? experiences over time, in: Proceedings of the 28th of the International Conference Extended Abstracts on Human Factors in Computing Systems - CHI EA ??10. p. 4075. doi:10.1145/1753846.1754105\n', 'Release', 'Retrospective', 'Long-Term Study', 'User Attendance', 'Questionnaire'),
(66, 'Value Mapping', '66.jpg', 'Value mapping enables the description of the values that are embodied in individual work. Creating value maps at the early stage of design phase helps to explain individual work to a team and to speed up the decision-making process.', '1. Individually write down most valuable works for oneself and the organization on cards\n2. Place cards on a value map template and rank the cards from always important to never important\n3. Share value maps with others and get feedback\n4. Gather all team members and set up a meeting to determine important values of the organization', '1. http://diytoolkit.org/tools/value-mapping/', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(67, 'Value Opportunity Analysis', '67.jpg', 'Value opportunity analysis reveals the extent to which a product or a service aligns with the users\' values by analyzing seven value-based criteria (emotion, ergonomics, aesthetics, identity, impact, core tech, quality). ', '1. Decide what to analyze.\n2. Analyze the product from seven value opportunities in a team: Emotion: adventure, independence, security, sensuality, confidence, power Ergonomics: comfort, safety, ease of use Aesthetics: visual, auditory, tactile, olfactory, taste Identity: point in time, sense of place, personality Impact: social, environmental Core Technology: reliable, enabling Quality: craftsmanship, durability\n3. Discuss the results and see how to improve the current version.', '1. Martin, B., Hanington, B., 2012. Universal Methods of Design. Rockport Publisher, Beverly.', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(68, 'Web Analytics', '68.jpg', 'Web analytics enables an organization to understand how and what users are doing online by collecting, analyzing, and reporting Internet data.', '1. Articulate goals of what information is needed.\n2. Collect raw data by using a service such as Google Analytics.\n3. Regular report data to internal stakeholders.\n4. Determine what to change.\n5. Track the results of the changes.', '1. https://www.thedesignexchange.org/design_methods/102\n2. Martin, B., Hanington, B., 2012. Universal Methods of Design. Rockport Publisher, Beverly.\n', 'Release', 'Real-Time', 'Long-Term Study', 'User Attendance', 'Observation'),
(69, 'Web of Abstraction', '69.jpg', 'Web of Abstraction seeks to examine the challenges associated with a vision or a desired outcome, which helps to generate ideas and solutions and support the decision-making process. Ideas and solutions can be generated by continuously asking two questions, \"Why\" and \"What is stopping me/us?\"', '1. Identify the original challenge and write the challenge in the center of a piece of paper.\n2. Begin by asking \"Why?\" Why is this a problem? Why is it important? Ask \"Why else?\" Try to think of another reason for why to reach this goal. Keep asking \"Why?\" at each level (write why questions 3. above the original challenge).\n4. Ask \"What\'s stopping me?\" What else is stopping me? Repeat at each level (write what questions below the original challenge).\n5. Look at the web and choose a line of questions to converge.', '1. http://gsvc.org/wp-content/uploads/2016/10/Problem-Definition-Web-of-Abstraction.pdf\n2. https://www.thedesignexchange.org/design_methods/347\n3. Creative Leadership: Skills That Drive Change by Gerard J. Puccio, Mary C. Murdock, Marie Mance\n', 'Planning', 'Retrospective', 'Short-Term Study', 'User Attendance', 'Interview'),
(70, 'Weighted Matrix', '70.jpg', 'A Weighted Matrix helps a team to identify and prioritize the most important criteria of a product or service for common decision-making.\n', '1. List the different evaluation criteria for a product or service\n2. For each criterion, create a list of design options that could fulfill the evaluation criterion\n3. Assign a weight factor to each criterion based on its importance \n4. Construct a two-dimensional table (with the design options as rows and the design criteria as columns)\n5. Calculate the weighted scores for each design option\n6. Evaluate each option and come to a common decision', '1. Martin, B., Hanington, B., 2012. Universal Methods of Design. Rockport Publisher, Beverly.\n2. https://www.thedesignexchange.org/design_methods/103\n3. http://asq.org/learn-about-quality/decision-making-tools/overview/decision-matrix.html\n4. http://deseng.ryerson.ca/dokuwiki/design:weighted_decision_matrix\n5. http://asq.org/learn-about-quality/decision-making-tools/overview/decision-matrix.html\n', 'Planning', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(71, 'Wireframing', '71.jpg', 'Wireframing is a Low-Fidelity Prototyping technique that enable teams to clearly understand the architecture and functions of the interface of a product or service. \n', '1. Collect content elements and functionalities for an interface of a product or a service\n2. Sketch the interface as an early wireframe by matching different content elements and/or functionalities to each other\n3. Share the wireframe with stakeholders for feedback and iterate the wireframe \n4. Test the iterated wireframe and develop it to a high-fidelity prototype\n', '1. https://www.infragistics.com/community/blogs/devtoolsguy/archive/2015/08/13/the-history-of-wireframing-amp-prototyping.aspx', 'Low-Fidelity Prototyping', 'Retrospective', 'Short-Term Study', 'User Absence', 'Group Discussion'),
(72, 'Wizard of Oz', '72.jpg', 'The Wizard of Oz technique enables users to interact with a low-cost and non-functional prototype. A \"wizard\" observes the interaction of users with the prototype in a back room and simulates the system responses in real time. \n', '1. Create a low-cost and non-functional prototype for the simulation\n2. Develop a test plan\n3. Ask the participants to simulate the usage of the prototype\n4. Assign a researcher as a \"wizard\" who hides in a back room, observes user interactions, and simulates system responses in real time\n5. Take notes on how people perform during the interaction process\n6. Conduct a feedback session with participants to understand their system experiences', '1. Dahlbaeck, N., Joensson, A., and Ahrenberg, L. 1993. \"Wizard of Oz - why and how,\" Knowledge-Based Systems, (6:4), p. 1983.\n2. Li, Y., Hong, J., and Landay, J. 2007. \"Design Challenges and Principles for Wizard of Oz Testing of Location- Enhanced Applications,\" IEEE Pervasive Computing, (6:2), pp. 70?C75 (doi: 10.1109/MPRV.2007.28).\n3. http://bwang29.github.io/offshore/gesture/wizard.html\n4. http://www.usabilitybok.org/wizard-of-oz\n', 'Low-Fidelity Prototyping', 'Real-Time', 'Short-Term Study', 'User Attendance', 'Experiment');

-- --------------------------------------------------------

--
-- 表的结构 `tn_tags`
--

CREATE TABLE `tn_tags` (
  `tn_id` int(11) NOT NULL,
  `tag` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `tn_tags`
--

INSERT INTO `tn_tags` (`tn_id`, `tag`) VALUES
(1, 'Idea Generation'),
(1, 'Expert Participation'),
(1, 'Short-Term Duration'),
(2, 'Feedback Collection'),
(2, 'Prototype Evaluation'),
(2, 'Short-Term Duration'),
(3, 'Idea Generation'),
(3, 'Expert Participation'),
(3, 'Short-Term Duration'),
(4, 'Feedback Collection'),
(4, 'Prototype Evaluation'),
(4, 'Evaluation'),
(5, 'Information Organization'),
(5, 'Relationships and Dependencies'),
(6, 'Idea Generation'),
(6, 'Information Organization'),
(6, 'Expert Participation'),
(7, 'Expert Participation'),
(7, 'Short-Term Duration'),
(8, 'User Research'),
(9, 'Prototype Evaluation'),
(9, 'Expert Participation'),
(9, 'Short-Term Duration'),
(9, 'UX Evaluation'),
(10, 'Idea Generation'),
(10, 'Expert Participation'),
(10, 'Collaboration with Stakeholders'),
(10, 'Short-Term Duration'),
(11, 'Idea Generation'),
(11, 'Short-Term Duration'),
(12, 'User Research'),
(12, 'Evaluation'),
(13, 'Idea Generation'),
(13, 'Information Organization'),
(13, 'Expert Participation'),
(14, 'Prototyping'),
(14, 'Evaluation'),
(14, 'Expert Participation'),
(15, 'Prototyping'),
(15, 'User Participation'),
(15, 'Short-Term Duration'),
(16, 'Idea Generation'),
(16, 'Information Organization'),
(16, 'Expert Participation'),
(16, 'Short-Term Duration'),
(17, 'Feedback Collection'),
(17, 'Evaluation'),
(17, 'User Participation'),
(17, 'Short-Term Duration'),
(18, 'Evaluation'),
(19, 'User Research'),
(19, 'Feedback Collection'),
(19, 'User Participation'),
(19, 'Short-Term Duration'),
(20, 'User Research'),
(20, 'Long-Term Duration'),
(21, 'Feedback Collection'),
(21, 'Evaluation'),
(21, 'Long-Term Duration'),
(22, 'User Research'),
(22, 'Expert Participation'),
(22, 'Long-Term Duration'),
(23, 'User Research'),
(23, 'User Participation'),
(23, 'Short-Term Duration'),
(24, 'User Research'),
(25, 'Prototype Evaluation'),
(25, 'Prototyping'),
(25, 'Short-Term Duration'),
(25, 'UX Evaluation'),
(26, 'User Research'),
(26, 'Evaluation'),
(26, 'Product Evaluation'),
(26, 'Short-Term Duration'),
(27, 'Prototyping'),
(27, 'User Participation'),
(27, 'Short-Term Duration'),
(28, 'User Research'),
(29, 'Short-Term Duration'),
(30, 'Feedback Collection'),
(30, 'Prototype Evaluation'),
(30, 'Expert Participation'),
(31, 'User Research'),
(31, 'Evaluation'),
(31, 'Short-Term Duration'),
(32, 'Idea Generation'),
(32, 'Expert Participation'),
(32, 'Short-Term Duration'),
(32, 'UX Evaluation'),
(33, 'Idea Generation'),
(33, 'Evaluation'),
(34, 'Idea Generation'),
(34, 'Information Organization'),
(34, 'Expert Participation'),
(34, 'Short-Term Duration'),
(35, 'User Research'),
(35, 'User Participation'),
(35, 'Short-Term Duration'),
(36, 'Idea Generation'),
(36, 'Information Organization'),
(36, 'Short-Term Duration'),
(37, 'Information Organization'),
(37, 'Expert Participation'),
(37, 'Short-Term Duration'),
(38, 'Short-Term Duration'),
(39, 'Prototyping'),
(39, 'Long-Term Duration'),
(40, 'Expert Participation'),
(40, 'UX Evaluation'),
(41, 'User Research'),
(41, 'User Participation'),
(41, 'Long-Term Duration'),
(42, 'User Research'),
(42, 'User Participation'),
(42, 'Short-Term Duration'),
(43, 'Feedback Collection'),
(43, 'Prototype Evaluation'),
(43, 'Evaluation'),
(43, 'Short-Term Duration'),
(44, 'Feedback Collection'),
(44, 'Evaluation'),
(44, 'Product Evaluation'),
(44, 'Long-Term Duration'),
(45, 'Feedback Collection'),
(45, 'Evaluation'),
(45, 'Short-Term Duration'),
(46, 'Feedback Collection'),
(46, 'Evaluation'),
(46, 'User Participation'),
(46, 'Short-Term Duration'),
(47, 'Idea Generation'),
(47, 'Information Organization'),
(47, 'Expert Participation'),
(48, 'User Research'),
(48, 'Expert Participation'),
(48, 'UX Evaluation'),
(49, 'User Research'),
(49, 'Expert Participation'),
(49, 'Short-Term Duration'),
(50, 'Feedback Collection'),
(50, 'User Participation'),
(50, 'Short-Term Duration'),
(51, 'User Research'),
(51, 'Short-Term Duration'),
(52, 'User Research'),
(52, 'Long-Term Duration'),
(54, 'Prototype Evaluation'),
(54, 'Evaluation'),
(54, 'User Participation'),
(54, 'Short-Term Duration'),
(55, 'Idea Generation'),
(55, 'Information Organization'),
(55, 'Short-Term Duration'),
(55, 'Relationships and Dependencies'),
(56, 'Evaluation'),
(56, 'Collaboration with Stakeholders'),
(56, 'Short-Term Duration'),
(57, 'Idea Generation'),
(57, 'Expert Participation'),
(57, 'Short-Term Duration'),
(58, 'Idea Generation'),
(58, 'Expert Participation'),
(58, 'Short-Term Duration'),
(59, 'Idea Generation'),
(59, 'Information Organization'),
(59, 'Expert Participation'),
(59, 'Short-Term Duration'),
(60, 'Feedback Collection'),
(60, 'Short-Term Duration'),
(61, 'Idea Generation'),
(61, 'Short-Term Duration'),
(62, 'Expert Participation'),
(62, 'Short-Term Duration'),
(62, 'Relationships and Dependencies'),
(63, 'Information Organization'),
(65, 'Feedback Collection'),
(65, 'Evaluation'),
(65, 'Long-Term Duration'),
(66, 'Information Organization'),
(66, 'Expert Participation'),
(66, 'Short-Term Duration'),
(67, 'Evaluation'),
(67, 'Expert Participation'),
(67, 'Short-Term Duration'),
(68, 'Evaluation'),
(68, 'Long-Term Duration'),
(69, 'Idea Generation'),
(69, 'Expert Participation'),
(69, 'Short-Term Duration'),
(70, 'Information Organization'),
(70, 'Evaluation'),
(70, 'Expert Participation'),
(70, 'Short-Term Duration'),
(71, 'Prototyping'),
(71, 'Expert Participation'),
(72, 'Prototype Evaluation'),
(72, 'Mid-Term Duration');

-- --------------------------------------------------------

--
-- 表的结构 `tn_tags_search`
--

CREATE TABLE `tn_tags_search` (
  `tn_id` int(11) NOT NULL,
  `tn_name` varchar(100) NOT NULL,
  `tag1` int(11) NOT NULL,
  `tag2` int(11) NOT NULL,
  `tag3` int(11) NOT NULL,
  `tag4` int(11) NOT NULL,
  `tag5` int(11) NOT NULL,
  `tag6` int(11) NOT NULL,
  `tag7` int(11) NOT NULL,
  `tag8` int(11) NOT NULL,
  `tag9` int(11) NOT NULL,
  `tag10` int(11) NOT NULL,
  `tag11` int(11) NOT NULL,
  `tag12` int(11) NOT NULL,
  `tag13` int(11) NOT NULL,
  `tag14` int(11) NOT NULL,
  `tag15` int(11) NOT NULL,
  `tag16` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `tn_tags_search`
--

INSERT INTO `tn_tags_search` (`tn_id`, `tn_name`, `tag1`, `tag2`, `tag3`, `tag4`, `tag5`, `tag6`, `tag7`, `tag8`, `tag9`, `tag10`, `tag11`, `tag12`, `tag13`, `tag14`, `tag15`, `tag16`) VALUES
(1, '3-12-3 Brainstorming', 5, 45, 10, 0, 0, 0, 5, 15, 0, 5, 0, 10, 0, 0, 0, 0),
(2, '3E (Expressing Experiences and Emotions)', 26, 0, 0, 21, 16, 0, 5, 0, 0, 0, 0, 16, 0, 5, 0, 5),
(3, '6-3-5 Brainwriting', 5, 45, 10, 0, 0, 0, 5, 15, 0, 5, 0, 10, 0, 0, 0, 0),
(4, 'A/B Testing', 16, 0, 0, 16, 16, 5, 16, 0, 0, 0, 0, 0, 5, 0, 5, 0),
(5, 'Actors Mapping', 20, 10, 30, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 0, 5, 10),
(6, 'Affinity Diagramming', 0, 40, 25, 0, 0, 0, 0, 15, 0, 0, 0, 0, 5, 0, 5, 5),
(7, 'Attribute Listing', 10, 10, 20, 5, 0, 0, 5, 15, 5, 0, 0, 10, 0, 0, 0, 0),
(8, 'Behavioral Mapping', 40, 0, 20, 5, 0, 0, 5, 0, 0, 0, 0, 0, 5, 5, 5, 5),
(9, 'Bodystorming', 0, 16, 0, 5, 16, 5, 5, 16, 0, 0, 0, 11, 0, 11, 0, 5),
(10, 'Business Origami', 5, 40, 0, 0, 0, 0, 0, 20, 0, 10, 0, 10, 0, 0, 0, 5),
(11, 'Closed Card Sorting', 15, 25, 15, 5, 0, 0, 5, 5, 0, 0, 0, 15, 0, 0, 0, 5),
(12, 'Co-Discovery', 30, 0, 0, 10, 10, 0, 10, 0, 0, 0, 5, 5, 5, 5, 5, 5),
(13, 'Cognitive Mapping', 0, 25, 35, 5, 5, 0, 0, 10, 0, 0, 0, 5, 5, 0, 0, 0),
(14, 'Cognitive Walkthrough ', 5, 5, 11, 0, 11, 16, 11, 21, 0, 0, 0, 5, 0, 5, 0, 0),
(15, 'Collaborative Sketching', 11, 11, 0, 0, 5, 21, 0, 0, 0, 5, 16, 16, 0, 0, 0, 5),
(16, 'Concept Mapping', 0, 30, 35, 5, 5, 0, 0, 10, 0, 0, 5, 10, 0, 0, 0, 0),
(17, 'Concurrent Think-Aloud ', 16, 0, 0, 21, 5, 5, 16, 0, 0, 0, 11, 16, 0, 0, 0, 5),
(18, 'Content Inventory & Audit', 5, 0, 20, 10, 0, 5, 10, 5, 5, 0, 0, 5, 5, 0, 0, 0),
(19, 'Contextual Laddering', 35, 5, 0, 15, 5, 0, 0, 0, 0, 0, 10, 15, 0, 0, 0, 5),
(20, 'Critical Incident Technique', 32, 11, 5, 0, 0, 0, 5, 5, 0, 5, 5, 0, 11, 0, 0, 5),
(21, 'Desirability Testing with Product Reaction Cards', 15, 5, 5, 20, 0, 5, 10, 5, 0, 0, 5, 5, 10, 5, 0, 5),
(22, 'Diary Studies', 42, 11, 0, 5, 0, 0, 0, 11, 0, 0, 0, 0, 16, 0, 0, 5),
(23, 'Directed Storytelling', 47, 11, 0, 0, 0, 0, 5, 0, 0, 0, 11, 11, 0, 0, 5, 5),
(24, 'Experience Clips', 30, 0, 5, 10, 5, 0, 5, 5, 0, 0, 0, 5, 5, 5, 0, 5),
(25, 'Experience Prototyping', 5, 5, 0, 0, 16, 26, 0, 0, 0, 0, 5, 11, 0, 11, 5, 0),
(26, 'Eye-tracking', 40, 0, 0, 5, 0, 0, 10, 0, 10, 0, 5, 10, 0, 0, 0, 0),
(27, 'Flexible Modeling', 21, 5, 5, 5, 5, 21, 0, 0, 0, 0, 11, 16, 0, 0, 0, 0),
(28, 'Fly-on-the-Wall Observation', 55, 10, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 5, 0, 5, 5),
(29, 'Graffiti Walls', 25, 20, 0, 10, 0, 0, 5, 0, 0, 5, 5, 10, 5, 0, 0, 5),
(30, 'Heuristic Evaluation', 11, 0, 5, 16, 21, 5, 5, 21, 0, 0, 0, 5, 5, 0, 0, 0),
(31, 'Kano Analysis', 35, 5, 5, 0, 10, 0, 10, 0, 0, 0, 0, 10, 5, 0, 0, 5),
(32, 'LEGO Serious Play', 5, 26, 5, 0, 0, 11, 0, 11, 0, 5, 0, 16, 0, 11, 0, 0),
(33, 'Mental Model Diagramming', 10, 25, 20, 0, 0, 0, 15, 0, 5, 0, 5, 0, 5, 0, 0, 0),
(34, 'Mind Mapping', 5, 40, 25, 0, 0, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 5),
(35, 'Mood Boards', 30, 20, 10, 0, 0, 0, 0, 5, 0, 0, 10, 15, 0, 0, 0, 0),
(36, 'Motivation Matrix', 5, 25, 25, 5, 0, 0, 0, 5, 0, 5, 0, 15, 0, 0, 0, 5),
(37, 'Offering Mapping', 10, 20, 30, 0, 0, 5, 0, 10, 0, 0, 0, 10, 0, 5, 0, 5),
(38, 'Open Card Sorting', 25, 20, 10, 5, 0, 0, 5, 0, 0, 0, 5, 10, 0, 0, 5, 5),
(39, 'Parallel Prototyping', 26, 5, 5, 0, 11, 21, 0, 5, 0, 0, 0, 0, 11, 0, 5, 0),
(40, 'Personas', 20, 10, 15, 0, 10, 0, 0, 15, 0, 0, 0, 0, 5, 10, 5, 5),
(41, 'Photo Diary', 40, 10, 0, 5, 0, 0, 0, 5, 0, 0, 10, 5, 10, 0, 0, 5),
(42, 'Photo Elicitation Interviewing', 45, 10, 0, 5, 0, 0, 0, 0, 0, 0, 10, 10, 0, 0, 5, 5),
(43, 'Private Camera Conversation', 21, 0, 0, 16, 21, 0, 11, 0, 0, 0, 0, 11, 0, 0, 0, 5),
(44, 'Product Experience Tracker', 15, 0, 5, 25, 5, 0, 10, 0, 10, 0, 5, 5, 10, 0, 0, 0),
(45, 'Repertory Grids', 16, 0, 21, 16, 11, 0, 11, 0, 0, 0, 0, 11, 0, 0, 5, 0),
(46, 'Retrospective Think-Aloud', 11, 0, 0, 26, 11, 0, 11, 0, 0, 0, 16, 11, 0, 0, 0, 5),
(47, 'Roadmapping', 0, 30, 30, 0, 5, 0, 0, 15, 0, 0, 0, 0, 5, 0, 5, 0),
(48, 'Role-Playing', 30, 10, 0, 0, 5, 0, 0, 15, 0, 0, 0, 5, 0, 10, 0, 5),
(49, 'Scenarios', 30, 15, 10, 0, 5, 0, 0, 10, 0, 5, 0, 10, 0, 5, 0, 5),
(50, 'Sentence Completion', 25, 5, 0, 15, 5, 0, 5, 0, 0, 0, 10, 10, 0, 5, 5, 5),
(51, 'Service Blueprints', 30, 5, 20, 0, 5, 5, 0, 0, 0, 0, 0, 10, 5, 0, 0, 0),
(52, 'Shadowing', 50, 10, 0, 5, 0, 0, 0, 0, 0, 0, 5, 0, 10, 0, 0, 5),
(53, 'Six Thinking Hats', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(54, 'Speed Dating', 15, 0, 0, 5, 15, 5, 10, 0, 5, 0, 10, 10, 0, 0, 5, 0),
(55, 'Stakeholder Maps', 5, 25, 25, 5, 0, 0, 0, 5, 0, 5, 5, 10, 0, 0, 0, 10),
(56, 'Stakeholder Walkthrough', 5, 5, 0, 5, 11, 5, 11, 0, 0, 16, 11, 16, 0, 5, 0, 5),
(57, 'Story Sharing', 15, 25, 0, 0, 0, 5, 0, 20, 0, 5, 0, 10, 0, 0, 0, 5),
(58, 'Storyboarding', 20, 35, 10, 0, 5, 0, 0, 10, 0, 0, 0, 10, 0, 0, 0, 5),
(59, 'Territory Maps', 0, 30, 25, 0, 0, 0, 0, 15, 0, 0, 0, 10, 0, 0, 0, 0),
(60, 'The Love Letter & the Breakdown Letter', 25, 5, 0, 15, 5, 0, 5, 0, 0, 0, 5, 15, 0, 5, 0, 5),
(61, 'Tomorrow Headlines', 25, 30, 5, 0, 10, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0),
(62, 'Touchpoint Matrix', 25, 5, 20, 5, 5, 0, 0, 10, 0, 0, 0, 10, 0, 5, 0, 10),
(63, 'User Journey Maps', 25, 5, 25, 0, 5, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 5),
(64, 'User Story', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(65, 'UX Curve', 10, 5, 15, 20, 0, 0, 10, 0, 5, 0, 5, 0, 15, 0, 0, 0),
(66, 'Value Mapping', 0, 20, 30, 0, 0, 5, 0, 15, 0, 0, 0, 10, 0, 0, 0, 5),
(67, 'Value Opportunity Analysis', 5, 21, 0, 5, 0, 0, 11, 16, 5, 0, 0, 11, 0, 0, 0, 0),
(68, 'Web Analytics', 15, 5, 15, 10, 0, 0, 15, 5, 5, 0, 0, 0, 10, 0, 0, 0),
(69, 'Web of Abstraction', 5, 30, 20, 0, 5, 5, 0, 10, 0, 0, 0, 10, 0, 0, 0, 0),
(70, 'Weighted Matrix', 0, 15, 25, 0, 0, 0, 10, 15, 5, 5, 0, 10, 0, 0, 0, 5),
(71, 'Wireframing', 5, 5, 16, 0, 5, 26, 0, 11, 0, 0, 5, 5, 0, 0, 5, 0),
(72, 'Wizard of Oz', 26, 0, 0, 11, 16, 11, 5, 0, 0, 0, 5, 5, 0, 0, 11, 5);

-- --------------------------------------------------------

--
-- 表的结构 `user_advisor_history`
--

CREATE TABLE `user_advisor_history` (
  `project_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `project_name` varchar(25) NOT NULL,
  `project_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `project_dp` varchar(25) NOT NULL,
  `project_d` varchar(25) NOT NULL,
  `project_up` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `user_advisor_history`
--

INSERT INTO `user_advisor_history` (`project_id`, `user_id`, `project_name`, `project_date`, `project_dp`, `project_d`, `project_up`) VALUES
(5, 7, 'service design', '2018-09-10 16:49:08', 'High-Fidelity Prototyping', 'Long-Term Study', 'User Absence'),
(9, 7, 'sdfsdfsdf', '2018-09-11 09:57:46', 'Low-Fidelity Prototyping', 'Short-Term Study', 'User Absence'),
(10, 5, 'servicedesignKIT', '2018-09-12 14:07:33', 'Release', '', 'User Attendance'),
(11, 5, 'aabbcc', '2018-09-12 18:18:28', 'High-Fidelity Prototyping', 'Short-Term Study', 'User Absence'),
(12, 5, 'test', '2018-09-27 16:04:53', 'Release', '', 'User Absence'),
(13, 5, 'test1', '2018-10-01 11:26:02', 'Low-Fidelity Prototyping', 'Long-Term Study', 'User Absence'),
(14, 5, 'undefined', '2018-10-01 12:57:14', 'Release', '', 'User Absence'),
(15, 5, 'servicedesign', '2018-10-02 08:44:27', 'Release', '', 'User Absence'),
(16, 5, 'sssss', '2018-10-03 15:18:26', 'Release', '', 'User Absence'),
(17, 5, 'log3', '2018-10-04 13:54:44', 'Release', 'Short-Term Study', 'User Attendance'),
(18, 5, '456', '2018-10-04 13:58:54', 'Low-Fidelity Prototyping', 'Long-Term Study', 'User Absence');

-- --------------------------------------------------------

--
-- 表的结构 `user_info`
--

CREATE TABLE `user_info` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `email` varchar(25) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `user_info`
--

INSERT INTO `user_info` (`id`, `name`, `email`, `password`) VALUES
(5, 'test', 'test@test.test', '8476f51730fcc138775474b5adbb565d'),
(7, 'obst', '111@111.111', 'bd42b18be011e607791b4a37dccc5c2f');

-- --------------------------------------------------------

--
-- 表的结构 `user_like_tn`
--

CREATE TABLE `user_like_tn` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `tn_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `user_like_tn`
--

INSERT INTO `user_like_tn` (`id`, `user_id`, `tn_id`) VALUES
(3, 5, 6),
(4, 5, 7),
(5, 5, 8),
(14, 5, 21),
(16, 7, 3),
(17, 5, 39);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `s_tn`
--
ALTER TABLE `s_tn`
  ADD PRIMARY KEY (`tn_id`);

--
-- Indexes for table `timo_log`
--
ALTER TABLE `timo_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tn_info`
--
ALTER TABLE `tn_info`
  ADD PRIMARY KEY (`tn_id`);

--
-- Indexes for table `tn_tags_search`
--
ALTER TABLE `tn_tags_search`
  ADD PRIMARY KEY (`tn_id`);

--
-- Indexes for table `user_advisor_history`
--
ALTER TABLE `user_advisor_history`
  ADD PRIMARY KEY (`project_id`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_like_tn`
--
ALTER TABLE `user_like_tn`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `s_tn`
--
ALTER TABLE `s_tn`
  MODIFY `tn_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用表AUTO_INCREMENT `timo_log`
--
ALTER TABLE `timo_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用表AUTO_INCREMENT `tn_info`
--
ALTER TABLE `tn_info`
  MODIFY `tn_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- 使用表AUTO_INCREMENT `tn_tags_search`
--
ALTER TABLE `tn_tags_search`
  MODIFY `tn_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- 使用表AUTO_INCREMENT `user_advisor_history`
--
ALTER TABLE `user_advisor_history`
  MODIFY `project_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- 使用表AUTO_INCREMENT `user_info`
--
ALTER TABLE `user_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用表AUTO_INCREMENT `user_like_tn`
--
ALTER TABLE `user_like_tn`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
