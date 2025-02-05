User Management Center

Project Introduction
A one-stop user management system based on Spring Boot + React, implementing user registration, login, search, and management functions.

Frontend:
HTML, CSS, Js, TS, React, Ant Desgin pro, Ant Design, Umi, Umi Request, Forward/Reverse Proxy

Backend:
Java, Spring, SpringMVC, SpringBoot, Mybatis, Mybatis-plus, MySQL, JUnit, Maven

Infra:
Nginx, EC2, RDS, Xsell

Frontend points:
1. To improve development efficiency, used Ant Design Pro to quickly set up the base UI and refactored the original template, extracting reusable public components for faster development.
2. Used the umi-request request library to encapsulate API requests, adding global request interception and global exception handling, reducing redundant logic and improving user experience.
3. During frontend development, leveraged Ant Design Pro’s proxy configuration to implement dev environment backend API access.
4. For global request management, used NODE_ENV variables to automatically adjust request endpoints based on the environment, ensuring the correct API is accessed during deployment.

Register menu:
![unnamed](https://github.com/user-attachments/assets/d5878246-1ee0-4d80-9177-b061475a4b88)

Login menu:
![WeChat截图_20241212072922](https://github.com/user-attachments/assets/3ce6c545-07f5-4fcb-9e1e-fce52d0b4c75)

Manager menu:
![WeChat截图_20241216072045](https://github.com/user-attachments/assets/ac4b169d-e68b-4d20-94dd-be8b21a94a85)
