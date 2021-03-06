import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';
import { CoPageTitleComponent } from './components/atoms/co-page-title/co-page-title.component';
import { CoPageSubtitleComponent } from './components/atoms/co-page-subtitle/co-page-subtitle.component';
import { CoPageHeaderComponent } from './components/molecules/co-page-header/co-page-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import en from '@angular/common/locales/en';
import { CoButtonComponent } from './components/atoms/co-button/co-button.component';
import { CoSectionTitleComponent } from './components/atoms/co-section-title/co-section-title.component';
import { CoRoundedButtonComponent } from './components/atoms/co-rounded-button/co-rounded-button.component';
import { CoMenuItemComponent } from './components/atoms/co-menu-item/co-menu-item.component';
import { CoMenuItemsComponent } from './components/molecules/co-menu-items/co-menu-items.component';
import { CoAvatarComponent } from './components/atoms/co-avatar/co-avatar.component';
import { CoMainHeaderComponent } from './components/organisms/co-main-header/co-main-header.component';
import { CoMobileMenuButtonComponent } from './components/atoms/co-mobile-menu-button/co-mobile-menu-button.component';
import { CoNotificationButtonComponent } from './components/atoms/co-notification-button/co-notification-button.component';
import { CoSelectComponent } from './components/atoms/co-select/co-select.component';
import { CoRateComponent } from './components/atoms/co-rate/co-rate.component';
import { CoDividerComponent } from './components/atoms/co-divider/co-divider.component';
import { CoStepperDotsDotComponent } from './components/atoms/co-stepper-dots-dot/co-stepper-dots-dot.component';
import { CoIllustrationItemComponent } from './components/atoms/co-illustration-item/co-illustration-item.component';
import { CoAdvertisementAddressComponent } from './components/atoms/co-advertisement-address/co-advertisement-address.component';
// tslint:disable-next-line:max-line-length
import { CoAdvertisementAdditionalInfoComponent } from './components/atoms/co-advertisement-additional-info/co-advertisement-additional-info.component';
import { CoTextareaComponent } from './components/atoms/co-textarea/co-textarea.component';
import { CoLogoComponent } from './components/atoms/co-logo/co-logo.component';
import { CoIllustrationItemListComponent } from './components/molecules/co-illustration-item-list/co-illustration-item-list.component';
import { CoAdvertisementThumbnailComponent } from './components/atoms/co-advertisement-thumbnail/co-advertisement-thumbnail.component';
import { CoStepperDotsComponent } from './components/molecules/co-stepper-dots/co-stepper-dots.component';
import { CoInputComponent } from './components/atoms/co-input/co-input.component';
import { CoTitleComponent } from './components/atoms/co-title/co-title.component';
import { CoPriceComponent } from './components/atoms/co-price/co-price.component';
import { CoRadioStyleComponent } from './components/atoms/co-radio-style/co-radio-style.component';
import { CoAdvertisementComponent } from './components/molecules/co-advertisement/co-advertisement.component';
import { CoCheckboxComponent } from './components/atoms/co-checkbox/co-checkbox.component';
import { CoErrorFeedbackComponent } from './components/atoms/co-error-feedback/co-error-feedback.component';
import { CoSocialButtonComponent } from './components/atoms/co-social-button/co-social-button.component';
import { CoUploadComponent } from './components/atoms/co-upload/co-upload.component';
import { CoMobileMenuItemComponent } from './components/atoms/co-mobile-menu-item/co-mobile-menu-item.component';
import { CoMobileMenuItemListComponent } from './components/molecules/co-mobile-menu-item-list/co-mobile-menu-item-list.component';
import { CoInsigniaComponent } from './components/atoms/co-insignia/co-insignia.component';
import { CoMobileMenuUserComponent } from './components/molecules/co-mobile-menu-user/co-mobile-menu-user.component';
import { CoSelectableItemComponent } from './components/atoms/co-selectable-item/co-selectable-item.component';
import { CoPagingButtonsComponent } from './components/molecules/co-paging-buttons/co-paging-buttons.component';
import { CoAdvertisementListComponent } from './components/organisms/co-advertisement-list/co-advertisement-list.component';
import { CoSectionComponent } from './components/molecules/co-section/co-section.component';
import { CoCardComponent } from './components/atoms/co-card/co-card.component';
import { CoCardAnnounceComponent } from './components/molecules/co-card-announce/co-card-announce.component';
import { CoEstablishmentItemComponent } from './components/atoms/co-establishment-item/co-establishment-item.component';
import { CoEstablishmentItemListComponent } from './components/molecules/co-establishment-item-list/co-establishment-item-list.component';
import { CoLoginCardComponent } from './components/organisms/co-login-card/co-login-card.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './components/templates/main/main.component';
import { MyAdsComponent } from './pages/my-ads/my-ads.component';
import { CoCardAnnounceListComponent } from './components/organisms/co-card-announce-list/co-card-announce-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { CoRegisterNameComponent } from './components/organisms/co-register-name/co-register-name.component';
import { CoRegistrationTitleComponent } from './components/organisms/co-registration-title/co-registration-title.component';
import { CoRegisterAccountComponent } from './components/organisms/co-register-account/co-register-account.component';
import { CoRegisterAgeComponent } from './components/organisms/co-register-age/co-register-age.component';
import { CoRegisterPrefsComponent } from './components/organisms/co-register-prefs/co-register-prefs.component';
import { CoRegisterPhotoComponent } from './components/organisms/co-register-photo/co-register-photo.component';
import { SignInUpComponent } from './components/templates/sign-in-up/sign-in-up.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CoUserProfileHeaderComponent } from './components/organisms/co-user-profile-header/co-user-profile-header.component';
import { CoUserProfileHeaderActionsComponent } from './components/molecules/co-user-profile-header-actions/co-user-profile-header-actions.component';
import { CoUserProfileHeaderInfoComponent } from './components/molecules/co-user-profile-header-info/co-user-profile-header-info.component';
import { CoUserProfileHeaderAvatarComponent } from './components/molecules/co-user-profile-header-avatar/co-user-profile-header-avatar.component';
import { CoProfileUserNameComponent } from './components/atoms/co-profile-user-name/co-profile-user-name.component';
import { CoProfileUserCityAndAgeComponent } from './components/atoms/co-profile-user-city-and-age/co-profile-user-city-and-age.component';
import { CoProfileUserSinceComponent } from './components/atoms/co-profile-user-since/co-profile-user-since.component';
import { CoCommentComponent } from './components/molecules/co-comment/co-comment.component';
import { CoCommentListComponent } from './components/organisms/co-comment-list/co-comment-list.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AdvertisementComponent } from './pages/advertisement/advertisement.component';
import { CoCarouselComponent } from './components/atoms/co-carousel/co-carousel.component';
import { CoAdvertisementOwnerInfoComponent } from './components/molecules/co-advertisement-owner-info/co-advertisement-owner-info.component';
import { CoAdvertisementMainSectionComponent } from './components/organisms/co-advertisement-main-section/co-advertisement-main-section.component';
import { CoDetailedPriceComponent } from './components/molecules/co-detailed-price/co-detailed-price.component';
import { CoResidentsListComponent } from './components/molecules/co-residents-list/co-residents-list.component';
import { CoExperienceReportComponent } from './components/molecules/co-experience-report/co-experience-report.component';
import { CoExperienceReportsCarouselComponent } from './components/organisms/co-experience-reports-carousel/co-experience-reports-carousel.component';

registerLocaleData(en);

import { AuthService } from './services/auth/auth.service';
import { RegisterService } from './services/register/register.service';
import { MenuService } from './services/menu/menu.service';
import { UserService } from './services/user/user.service';
import { CompatibilityService } from './services/compatibility/compatibility.service';
import { AdvertisementService } from './services/advertisement/advertisement.service';
import { CoLoadingComponent } from './components/atoms/co-loading/co-loading.component';
import { AdvertiseVacancyComponent } from './pages/advertise-vacancy/advertise-vacancy.component';
import { CoAdvertiseVacancyPropertyTypeComponent } from './components/organisms/co-advertise-vacancy-property-type/co-advertise-vacancy-property-type.component';
import { CoAdvertiseVacancyLocationComponent } from './components/organisms/co-advertise-vacancy-location/co-advertise-vacancy-location.component';
import { CoAdvertiseVacancyResidentsComponent } from './components/organisms/co-advertise-vacancy-residents/co-advertise-vacancy-residents.component';
import { CoNumberPickerComponent } from './components/atoms/co-number-picker/co-number-picker.component';
import { CoAdvertiseVacancyPriceComponent } from './components/organisms/co-advertise-vacancy-price/co-advertise-vacancy-price.component';
import { CoAdvertiseVacancyRulesComponent } from './components/organisms/co-advertise-vacancy-rules/co-advertise-vacancy-rules.component';
import { CoAdvertiseVacancyPhotosComponent } from './components/organisms/co-advertise-vacancy-photos/co-advertise-vacancy-photos.component';
import { CoAdvertiseVacancyDescriptionComponent } from './components/organisms/co-advertise-vacancy-description/co-advertise-vacancy-description.component';
import { CoAdvertiseVacancyRoomsComponent } from './components/organisms/co-advertise-vacancy-rooms/co-advertise-vacancy-rooms.component';
import { CoAdvertiseVacancyAppliancesComponent } from './components/organisms/co-advertise-vacancy-appliances/co-advertise-vacancy-appliances.component';
import { CoAdvertiseVacancyAmenitiesComponent } from './components/organisms/co-advertise-vacancy-amenities/co-advertise-vacancy-amenities.component';
import { CoAdvertiseVacancyRestrictionsComponent } from './components/organisms/co-advertise-vacancy-restrictions/co-advertise-vacancy-restrictions.component';
import { CoAdvertisementFloatCardComponent } from './components/organisms/co-advertisement-float-card/co-advertisement-float-card.component';
import { SearchComponent } from './pages/search/search.component';
import { CoDropdownItemListComponent } from './components/molecules/co-dropdown-item-list/co-dropdown-item-list.component';
import { CoDropdownItemComponent } from './components/atoms/co-dropdown-item/co-dropdown-item.component';
import { CoMessageItemComponent } from './components/molecules/co-message-item/co-message-item.component';
import { CoNotificationItemComponent } from './components/molecules/co-notification-item/co-notification-item.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HelpComponent } from './pages/help/help.component';
import { TermsComponent } from './pages/terms/terms.component';
import { AdvertisementSearchPipe } from 'src/assets/js-utils/pipes/advertisement-search.pipe';
import { CoRuleComponent } from './components/atoms/co-rule/co-rule.component';
import { CoRulesListComponent } from './components/molecules/co-rules-list/co-rules-list.component';
import { CoCompatibilityComponent } from './components/atoms/co-compatibility/co-compatibility.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleguideComponent,
    CoPageTitleComponent,
    CoPageSubtitleComponent,
    CoPageHeaderComponent,
    CoButtonComponent,
    CoSectionTitleComponent,
    CoRoundedButtonComponent,
    CoMenuItemComponent,
    CoMenuItemsComponent,
    CoAvatarComponent,
    CoMainHeaderComponent,
    CoMobileMenuButtonComponent,
    CoNotificationButtonComponent,
    CoSelectComponent,
    CoRateComponent,
    CoDividerComponent,
    CoStepperDotsDotComponent,
    CoIllustrationItemComponent,
    CoAdvertisementAddressComponent,
    CoAdvertisementAdditionalInfoComponent,
    CoTextareaComponent,
    CoLogoComponent,
    CoIllustrationItemListComponent,
    CoAdvertisementThumbnailComponent,
    CoStepperDotsComponent,
    CoInputComponent,
    CoTitleComponent,
    CoPriceComponent,
    CoRadioStyleComponent,
    CoAdvertisementComponent,
    CoCheckboxComponent,
    CoErrorFeedbackComponent,
    CoSocialButtonComponent,
    CoUploadComponent,
    CoMobileMenuItemComponent,
    CoMobileMenuItemListComponent,
    CoInsigniaComponent,
    CoMobileMenuUserComponent,
    CoSelectableItemComponent,
    CoPagingButtonsComponent,
    CoAdvertisementListComponent,
    CoSectionComponent,
    CoCardComponent,
    CoCardAnnounceComponent,
    CoEstablishmentItemComponent,
    CoEstablishmentItemListComponent,
    CoLoginCardComponent,
    LoginComponent,
    MainComponent,
    MyAdsComponent,
    CoCardAnnounceListComponent,
    RegisterComponent,
    CoRegisterNameComponent,
    CoRegistrationTitleComponent,
    CoRegisterAccountComponent,
    CoRegisterAgeComponent,
    CoRegisterPrefsComponent,
    CoRegisterPhotoComponent,
    SignInUpComponent,
    ProfileComponent,
    CoUserProfileHeaderComponent,
    CoUserProfileHeaderActionsComponent,
    CoUserProfileHeaderInfoComponent,
    CoUserProfileHeaderAvatarComponent,
    CoProfileUserNameComponent,
    CoProfileUserCityAndAgeComponent,
    CoProfileUserSinceComponent,
    CoCommentComponent,
    CoCommentListComponent,
    LandingPageComponent,
    CoLoadingComponent,
    AdvertiseVacancyComponent,
    CoAdvertiseVacancyPropertyTypeComponent,
    CoAdvertiseVacancyLocationComponent,
    CoAdvertiseVacancyResidentsComponent,
    CoNumberPickerComponent,
    CoAdvertiseVacancyPriceComponent,
    CoAdvertiseVacancyRulesComponent,
    CoAdvertiseVacancyPhotosComponent,
    CoAdvertiseVacancyDescriptionComponent,
    CoAdvertiseVacancyRoomsComponent,
    CoAdvertiseVacancyAppliancesComponent,
    CoAdvertiseVacancyAmenitiesComponent,
    CoAdvertiseVacancyRestrictionsComponent,
    AdvertisementComponent,
    CoCarouselComponent,
    CoAdvertisementOwnerInfoComponent,
    CoAdvertisementMainSectionComponent,
    CoDetailedPriceComponent,
    CoResidentsListComponent,
    CoExperienceReportComponent,
    CoExperienceReportsCarouselComponent,
    CoAdvertisementFloatCardComponent,
    SearchComponent,
    CoDropdownItemListComponent,
    CoDropdownItemComponent,
    CoMessageItemComponent,
    CoNotificationItemComponent,
    SettingsComponent,
    HelpComponent,
    TermsComponent,
    AdvertisementSearchPipe,
    CoRuleComponent,
    CoRulesListComponent,
    CoCompatibilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFullpageModule,
    ClickOutsideModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, AuthService, RegisterService, MenuService, UserService, AdvertisementService, CompatibilityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
