import bg_icon from '../assets/bg_icon.svg'
import doll_icon from '../assets/doll_icon.svg'
import light_flower_icon from '../assets/light_flower_icon.svg'
import plus_icon from '../assets/plus_icon.svg'
import small_flower from '../assets/small_flower.svg'
import udemy_icon from '../assets/udemy_icon.png'
import course_2 from '../assets/course_2.svg'
import course_3 from '../assets/course_3.svg'
import course_4 from '../assets/course_4.svg'
import course_img_1 from '../assets/course_img_1.svg'
import course_img_2 from '../assets/course_img_2.svg'
import course_img_3 from '../assets/course_img_3.svg'
import certification_img_1 from '../assets/certification_img_1.svg'
import certification_img_2 from '../assets/certification_img_2.svg'
import certification_img_3 from '../assets/certification_img_3.svg'
import star_icon from '../assets/star_icon.svg'
import red_tick from '../assets/red_tick.svg'
import right_arrow from '../assets/right_arrow.svg'
import tutor_icon_1 from '../assets/tutor_icon_1.svg'
import tutor_icon_2 from '../assets/tutor_icon_2.svg'
import tutor_icon_3 from '../assets/tutor_icon_3.svg'
import tutor_icon_4 from '../assets/tutor_icon_4.svg'
import single_star from '../assets/single_star.svg'
import google_icon from '../assets/google_icon.png'
import colorless_star from '../assets/colorless_star.svg'
import left_arrow from '../assets/left_arrow.svg'
import  video_logo from '../assets/video_logo.svg'
import user_icon from '../assets/user_icon.svg'
import file_share_icon from '../assets/file_share_icon.svg'
import Time_icon from '../assets/Time_icon.svg'
import world_icon from '../assets/world_icon.svg'
import user_img from '../assets/user_img.svg'
import american_icon from  '../assets/american_icon.svg'
import Paypal_icon from '../assets/Paypal_icon.svg'
import visa_icon from '../assets/visa_icon.svg'
import color_circle from '../assets/color_circle.svg'
import foot_child_img from '../assets/foot_child_img.svg'
import foot_lap_img from '../assets/foot_lap_img.svg'
import foot_cat_img from '../assets/foot_cat_img.svg'
import teaching_icon from '../assets/teaching_icon.svg'
import video_controller from "../assets/video_controller.svg"
import admin_icon from "../assets/admin_icon.svg"
import lock_icon from "../assets/lock_icon.svg"
import admin_book_icon from "../assets/admin_book_icon.svg"
import admin_bright_icon from "../assets/admin_bright_icon.svg"
import eye_hide_solid from "../assets/eye_hide_solid.svg"
import admin_small_book_icon from "../assets/admin_small_book_icon.svg"
import rightSide_bg from "../assets/rightSide_bg.svg"
import right_side_center_logo from "../assets/right_side_center_logo.svg"
import admin_login_icon from "../assets/admin_login_icon.svg"
import eye_open_icon from "../assets/eye_open_icon.png"
import admin_logo from "../assets/admin_logo.svg"
import brightness_logo from "../assets/brightness_logo.svg"
import delete_logo from "../assets/delete_logo.svg"
import edit_logo from "../assets/edit_logo.svg"
import edit2_logo from "../assets/edit2_logo.svg"
import filter_logo from "../assets/filter_logo.svg"
import flag_logo from "../assets/flag_logo.svg"
import message_logo from "../assets/message_logo.svg"
import search_logo from "../assets/search_logo.svg"
import search_logo2 from "../assets/search_logo2.svg"
import home_logo from "../assets/home_logo.svg"
import  Adminarrow_logo from  "../assets/Adminarrow_logo.svg"
import storeimage_logo from "../assets/storeimage_logo.svg"



const assets = {
    storeimage_logo,
    Adminarrow_logo,
    home_logo,
    admin_logo,
    brightness_logo,
    delete_logo,
    edit_logo,
    edit2_logo,
    filter_logo,
    flag_logo,
    message_logo,
    search_logo,
    search_logo2,
    bg_icon,
    doll_icon,
    light_flower_icon,
    plus_icon,
    small_flower,
    udemy_icon,
    course_2,
    course_3,
    course_4,
    red_tick,
    star_icon,
    right_arrow,
    tutor_icon_1,
    tutor_icon_2,
    tutor_icon_3,
    tutor_icon_4,
    single_star,
    google_icon,
    colorless_star,
    left_arrow,
    video_logo,
    user_icon,
    file_share_icon,
    Time_icon,
    world_icon,
    user_img,
    american_icon,
    visa_icon,
    Paypal_icon,
    color_circle,
    foot_child_img,
    foot_cat_img,
    foot_lap_img,
    teaching_icon,
    video_controller,   
    certification_img_2,
    course_img_2, 
    admin_icon,
    lock_icon,
    admin_book_icon,
    admin_bright_icon,
    eye_hide_solid,
    admin_small_book_icon,
    rightSide_bg,
    right_side_center_logo,
    admin_login_icon,
    eye_open_icon,

}

export const courses = [
    { id:1, courseName:"Unconscious Bias",img: course_img_1, trending:"Popular" },
    { id:2, courseName:"Communication",img: course_img_2, trending:"Best Seller" },
    { id:3, courseName:"Critical Thinking",img: course_img_3, trending:"Best Seller" },
    { id:4, courseName:"Logical Thinking",img: course_img_3 , trending:"Best Seller"}

]

export const certificates = [
   {id:1, certificationName:"Team Work",img: certification_img_1, trending:"Best Seller"},
   {id:2, certificationName:"LeaderShip Skills",img:certification_img_2, trending:"Best Seller"},
   {id:3, certificationName:"Statistics",img: certification_img_3,trending:"Best Seller"},
   {id:4, certificationName:"Frontend",img: certification_img_1,trending:"Best Seller"},
]




export const tutors = [
    {id:1, tutorImage:tutor_icon_1, tutorName:"Robert James" , designation:"UI/UX Designer", courseCount:"56 courses" },
    {id:2, tutorImage:tutor_icon_2, tutorName:"Jessica Thomas" , designation:"Graphic Designer", courseCount:"62 courses" },
    {id:3, tutorImage:tutor_icon_3, tutorName:"Selena Mathew" , designation:"Full Stack Developer", courseCount:"37 courses" },  
    {id:4, tutorImage:tutor_icon_4, tutorName:"Tom Hendry" , designation:"SQL,Tableu", courseCount:"42 courses" },
]



export const educations = [{ id: 1,img:assets.foot_lap_img, percentage: "50%", heading: "lorem ipsum dolor", para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita ab blanditiis eos excepturi dolores officia velit architecto consequatur voluptate magnam." },
                          { id: 2,img:assets.foot_child_img, percentage: "10%", heading: "lorem ipsum dolor", para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita ab blanditiis eos excepturi dolores officia velit architecto consequatur voluptate magnam." },
                          { id: 3,img:assets.foot_cat_img, percentage: "50%", heading: "lorem ipsum dolor", para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita ab blanditiis eos excepturi dolores officia velit architecto consequatur voluptate magnam." },
                          ]



export const userData= {
    userName: "vignesh",
    email:"vigneshvijay221299@gmail.com",
    password:"Vicky@002"
}

export default assets
