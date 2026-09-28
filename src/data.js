import {
  FiMessageSquare,
  FiPhoneCall,
  FiCloud,
  FiShield,
  FiUsers,
  FiZap,
  FiLayers,
  FiTarget,
  FiRefreshCw,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export const company = {
  name: 'Aurex Global Technologies',
  shortName: 'Aurex Global',
  industry: 'Telecommunication & Technology Solutions',
  phone: '9211308896',
  email: 'aurexglobaltechnologies@gmail.com',
  number: '9211308896',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export const services = [
  {
    number: '01',
    icon: FiMessageSquare,
    title: 'Bulk SMS',
    description:
      'Business messaging solutions for notifications, alerts, promotions and customer communication.',
  },
  {
    number: '02',
    icon: FaWhatsapp,
    title: 'WhatsApp Business Solutions',
    description:
      'Business communication solutions using WhatsApp for customer engagement and notifications.',
  },
  {
    number: '03',
    icon: FiPhoneCall,
    title: 'Voice & IVR Solutions',
    description:
      'Voice communication and IVR solutions designed to improve customer interaction and business communication.',
  },
  {
    number: '04',
    icon: FiCloud,
    title: 'Cloud Telephony',
    description:
      'Modern cloud-based communication solutions that help businesses manage calls and customer interactions.',
  },
  {
    number: '05',
    icon: FiShield,
    title: 'OTP & Transactional Messaging',
    description:
      'Reliable messaging solutions for OTPs, authentication, alerts and transactional communication.',
  },
  {
    number: '06',
    icon: FiUsers,
    title: 'Enterprise Communication',
    description:
      'Communication technology solutions designed to support business operations and customer engagement.',
  },
];

export const whyChooseUs = [
  {
    icon: FiZap,
    title: 'Reliable Technology',
    description:
      'Solutions designed with reliability and business continuity in mind.',
  },
  {
    icon: FiLayers,
    title: 'Simple Integration',
    description:
      'Technology designed to integrate smoothly with existing business workflows.',
  },
  {
    icon: FiRefreshCw,
    title: 'Scalable Solutions',
    description:
      'Solutions that can grow with changing business requirements.',
  },
  {
    icon: FiTarget,
    title: 'Business Focused',
    description:
      'Focused on solving real communication and connectivity requirements.',
  },
];

export const serviceOptions = [
  'Bulk SMS',
  'WhatsApp Business Solutions',
  'Voice & IVR Solutions',
  'Cloud Telephony',
  'OTP & Transactional Messaging',
  'Enterprise Communication',
  'Other',
];
