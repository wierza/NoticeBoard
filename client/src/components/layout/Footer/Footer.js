import styles from './Footer.module.scss';
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="py-2 mt-5 bg-primary text-white">
            <div className="text-center">
                <small>Copyright &copy; NoticeBoard App 2023 <br/> Created by Dawid Wierzycki</small>
            </div>
        </footer>
    );
};

export default Footer;

