"use client";

import React from "react";
import { Table, Tag, Avatar, Rate, Space, Input } from "antd";
import { SearchOutlined, EllipsisOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

interface Product {
  name: string;
  image: string;
}

interface Customer {
  name: string;
  avatar: string;
}

interface ReviewData {
  key: string;
  product: Product;
  customer: Customer;
  rating: number;
  review: string;
  status: string;
  time: string;
  options:string;
}

const columns: ColumnsType<ReviewData> = [
  {
    title: "PRODUCT",
    dataIndex: "product",
    key: "product",
    render: (product: Product) => (
      <Space>
        <Avatar shape="square" size={50} src={product.image} />
        <a>{product.name}</a>
      </Space>
    ),
  },
  {
    title: "CUSTOMER",
    dataIndex: "customer",
    key: "customer",
    render: (customer: Customer) => (
      <Space>
        <Avatar src={customer.avatar}>{customer.name.charAt(0)}</Avatar>
        {customer.name}
      </Space>
    ),
  },
  {
    title: "RATING",
    dataIndex: "rating",
    key: "rating",
    width: 150, 
    render: (rating: number) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Rate disabled defaultValue={rating} style={{ fontSize: 14 }} />
      </div>
    ),
  },
  {
    title: "REVIEW",
    dataIndex: "review",
    key: "review",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      let color = status === "APPROVED" ? "green" : "orange";
      return <Tag color={color}>{status.toUpperCase()}</Tag>;
    },
  },
  {
    title: "TIME",
    dataIndex: "time",
    key: "time",
    width: 140,
    render: (time) => <span>{time}</span>, 
  },
  {
    title: "",
    dataIndex: "options",
    key: "options",
    render: (options) => <span>{options}</span>, 
  },
  
];

const data: ReviewData[] = [
  {
    key: "1",
    product: {
      name: "Fitbit Sense Advanced Smartwatch",
      image: "data:image/png;base64,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",
    },
    customer: {
      name: "Richard Dawkins",
      avatar: "https://via.placeholder.com/40",
    },
    rating: 5,
    review:
      "This Fitbit is fantastic! I was trying to be in better shape and needed some motivation, so I decided to treat myself to a new Fitbit.",
    status: "APPROVED",
    time: "Just now",
    options:"...",
  },
  {
    key: "2",
    product: {
      name: "iPhone 13 Pro Max - Pacific Blue - 128GB",
      image: "data:image/png;base64,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",
    },
    customer: {
      name: "Ashley Garrett",
      avatar: "https://via.placeholder.com/40",
    },
    rating: 3,
    review:
      "The order was delivered ahead of schedule. To give us additional time, you should leave the packaging sealed with plastic.",
    status: "APPROVED",
    time:"Just now",
    options:"...",
  },
  {
    key: "3",
    product: {
      name: "Apple MacBook Pro 13 inch - M1 - 8/256GB",
      image: "data:image/png;base64,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",
    },
    customer: {
      name: "Woodrow Burton",
      avatar: "https://via.placeholder.com/40",
    },
    rating: 4,
    review:
      "It's a Mac, after all. Once you've gone Mac, there's no going back. My first Mac lasted over nine years, and this is my second.",
    status: "PENDING",
    time:"Just now",
    options:"...",
  },
  {
    key: "4",
    product: {
      name: "Apple iMac 24-inch 4K Retina Display",
      image: "data:image/png;base64,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",
    },
    customer: {
      name: "Eric McGee",
      avatar: "https://via.placeholder.com/40",
    },
    rating: 3,
    review:
      "Personally, I like the minimalist style, but I wouldn't choose it if I were searching for a computer that I would use frequently.",
    status: "PENDING",
    time:"Nov 09, 3:23 AM",
    options:"...",
  },
  {
    key: "5",
    product: {
      name: "Razer Kraken v3 x Wired 7.1 Surroung Sound",
      image: "data:image/png;base64,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",
    },
    customer: {
      name: "Kim Carroll",
      avatar: "https://via.placeholder.com/40",
    },
    rating: 4,
    review:
      "It performs exactly as expected. There are three of these in the family.",
    status: "PENDING",
    time:"Nov 09, 2:15 PM",
    options:"...",
  },
  {
    key: "6",
    product: {
      name: "PlayStation 5 DualSense Wireless Controller",
      image: "data:image/png;base64,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",
    },
    customer: {
      name: "Barbara Lucas",
      avatar: "https://via.placeholder.com/40",
    },
    rating: 4,
    review:
      "The controller is quite comfy for me. Despite its increased size, the controller still fits well in my hands.",
    status: "APPROVED",
    time:"Nov 08, 8:53 AM",
    options:"...",
  },
];

const ReviewTable: React.FC = () => {
  return (
    <div className="m-11">
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
   
    <div>
      <h2 className="text-lg font-semibold">Latest Reviews</h2>
      <p className="text-gray-500 text-sm">Payment received across all channels</p>
    </div>

  
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Input placeholder="Search..." prefix={<SearchOutlined />} style={{ width: 200 }} />
      <span className="text-gray-600 cursor-pointer">All Products</span>
      <EllipsisOutlined className="text-gray-600 text-lg cursor-pointer" />
    </div>
  </div>

  <Table columns={columns} dataSource={data} pagination={{ pageSize: 6 }} rowSelection={{}} />
</div>
  
  

  );
};

export default ReviewTable;
