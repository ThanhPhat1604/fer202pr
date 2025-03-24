import React from "react";
import Sidebar from "../ui/Sidebar";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const CompanyProfile = () => {
    const teamMembers = [
        {
            name: "Nguyễn Minh Quang",
            position: "CEO",
            imgSrc: "https://randomuser.me/api/portraits/men/1.jpg", // Ảnh CEO
        },
        {
            name: "Lê Văn Bình",
            position: "CTO",
            imgSrc: "https://randomuser.me/api/portraits/men/2.jpg", // Ảnh CTO
        },
        {
            name: "Trần Thị Hạnh",
            position: "Head of Design",
            imgSrc: "https://randomuser.me/api/portraits/women/1.jpg", // Ảnh Head of Design
        },
    ];
    const partnerships = [
        {
            name: "Google",
            logoSrc: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        },
        {
            name: "Microsoft",
            logoSrc: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        },
        {
            name: "AWS",
            logoSrc: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        },
    ];
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="ml-64 flex-1 max-w-4xl mx-auto p-6">
                {/* Header */}
                <Card className="relative p-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg">
                    <div className="flex items-center">
                        <Avatar
                            className="w-20 h-20 border-4 border-white rounded-full"
                            src="https://static.topcv.vn/company_logos/x9h2bvu1Bl3iDgPXe49bBxT61beFA7LC_1676254077____c8b91a7ee5311800c6caaebae43541aa.jpg"
                            alt="Tech Corp"
                        />
                        <div className="ml-4">
                            <h1 className="text-2xl font-semibold">Tech Corp</h1>
                            <p className="text-lg">Leading Software Development Company</p>
                            <p className="text-sm">Hà Nội, Việt Nam</p>
                        </div>
                    </div>
                    <Button className="absolute top-4 right-4 bg-white text-black">
                        Edit Profile
                    </Button>
                </Card>

                {/* Contact Info */}
                <Card id="contact" className="p-4">
                    <h2 className="text-lg font-semibold">Contact Information</h2>
                    <p><strong>📍 Address:</strong> 456 George Street, Sydney</p>
                    <p><strong>📞 Phone:</strong> +61 2 9876 5432</p>
                    <p><strong>📧 Email:</strong> contact@techcorp.com</p>
                    <p><strong>🌐 Website:</strong> <a href="https://techcorp.com" className="text-blue-500">techcorp.com</a></p>
                </Card>

                {/* About Company */}
                <Card className="mt-6 p-4">
                    <h2 className="text-lg font-semibold">About Us</h2>
                    <p className="text-gray-600">
                        Chúng tôi là công ty phần mềm hàng đầu với hơn 10 năm kinh nghiệm, phát triển các giải pháp công nghệ tiên tiến.
                    </p>
                </Card>

                {/* Our Vision & Mission */}
                <Card className="mt-6 p-4">
                    <h2 className="text-lg font-semibold">Our Vision & Mission</h2>
                    <p className="text-gray-600">
                        Trở thành công ty công nghệ hàng đầu thế giới, đổi mới và phát triển bền vững.
                    </p>
                </Card>

                {/* Our Services / Products */}
                <Card className="mt-6 p-4">
                    <h2 className="text-lg font-semibold">Our Services / Products</h2>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                        <li>🔹 Custom Software Development</li>
                        <li>🔹 Cloud & DevOps Services</li>
                        <li>🔹 AI & Machine Learning Solutions</li>
                        <li>🔹 Mobile & Web Application Development</li>
                        <li>🔹 IT Consulting & Digital Transformation</li>
                    </ul>
                </Card>

                {/* Key Team Members */}
                <Card className="mt-6 p-4">
                    <h2 className="text-lg font-semibold mb-4">Key Team Members</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
                                <Avatar
                                    className="w-24 h-24 border-2 border-gray-300 rounded-full"
                                    src={member.imgSrc}
                                    alt={member.name}
                                />
                                <p className="mt-3 text-lg font-semibold">{member.name}</p>
                                <p className="text-sm text-gray-600">{member.position}</p>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Career Opportunities */}
                <Card className="mt-6 p-4">
                    <h2 className="text-lg font-semibold">Career Opportunities</h2>
                    <p className="text-gray-600 mt-2">We're always looking for talented individuals to join our team. Check out our open positions:</p>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                        <li>🚀 Senior Frontend Developer</li>
                        <li>🚀 Backend Engineer (Node.js, Python)</li>
                        <li>🚀 UI/UX Designer</li>
                        <li>🚀 DevOps Engineer</li>
                    </ul>
                    <Button className="mt-4 bg-blue-500 text-white">
                        View Open Positions
                    </Button>
                </Card>

                {/* Achievements */}
                <Card className="mt-6 p-4">
                    <h2 className="text-lg font-semibold">Achievements</h2>
                    <ul className="mt-2 list-disc list-inside">
                        <li>Top 10 công ty phần mềm uy tín nhất Việt Nam</li>
                        <li>Giải thưởng "Best IT Company 2023"</li>
                        <li>Hợp tác với hơn 500+ doanh nghiệp trên toàn cầu</li>
                    </ul>
                </Card>

                {/* Benefits */}
                <Card className="mt-6 p-4">
                    <h2 className="text-lg font-semibold">Our Benefits</h2>
                    <ul className="mt-2 list-disc list-inside">
                        <li>Môi trường làm việc sáng tạo, năng động</li>
                        <li>Cơ hội phát triển sự nghiệp rõ ràng</li>
                        <li>Chế độ lương thưởng hấp dẫn</li>
                    </ul>
                </Card>

                {/* Partnerships */}
                <Card className="mt-6 p-4">
                    <h2 className="text-lg font-semibold mb-4">Partnerships</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {partnerships.map((partner, index) => (
                            <div key={index} className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
                                <img
                                    className="w-20 h-20 object-contain"
                                    src={partner.logoSrc}
                                    alt={partner.name}
                                />
                                <p className="mt-2 text-lg font-semibold">{partner.name}</p>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Client Testimonials */}
                <Card className="mt-6 p-4">
                    <h2 className="text-lg font-semibold">Client Testimonials</h2>
                    <div className="mt-4 space-y-4">
                        <div className="flex items-center space-x-4">
                            <Avatar className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client 1" />
                            <div>
                                <p className="text-sm font-semibold">John Smith, CEO at XYZ Corp</p>
                                <p className="text-gray-600">"Tech Corp delivered outstanding software solutions, exceeding our expectations!"</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Avatar className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client 2" />
                            <div>
                                <p className="text-sm font-semibold">Emily Davis, CTO at ABC Ltd</p>
                                <p className="text-gray-600">"Great experience working with Tech Corp. Highly skilled and professional team!"</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default CompanyProfile;
