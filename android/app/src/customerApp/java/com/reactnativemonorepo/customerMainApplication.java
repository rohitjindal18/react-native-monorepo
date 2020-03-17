
package com.reactnativemonorepo;

import android.app.Application;

import androidx.annotation.Nullable;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.TurboReactPackage;
import com.facebook.react.bridge.ReactMarker;
import com.facebook.react.bridge.ReactMarkerConstants;
import com.facebook.react.module.model.ReactModuleInfoProvider;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.swmansion.gesturehandler.react.RNGestureHandlerModule;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.microsoft.codepush.react.CodePush;
import com.swmansion.rnscreens.RNScreensPackage;
import com.swmansion.rnscreens.ScreenContainerViewManager;
import com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager;
import com.swmansion.rnscreens.ScreenStackHeaderSubviewManager;
import com.swmansion.rnscreens.ScreenStackViewManager;
import com.swmansion.rnscreens.ScreenViewManager;
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.bottomsheetbehavior.BottomSheetBehaviorPackage;
import com.th3rdwave.safeareacontext.SafeAreaViewManager;

import java.util.Arrays;
import java.util.List;

public class customerMainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new CustomPackage(),
//                    new RNScreensPackage(),
//                    new RNGestureHandlerPackage(),
//                    new SafeAreaContextPackage(),
                    new CodePush("TfAg2qQd3vruasEA-nPlOk3YIHCCiF7NQUO0T", getApplicationContext(), BuildConfig.DEBUG),
                    new BottomSheetBehaviorPackage()
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "./src/apps/customerApp/index";
        }

        @Override
        protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
        ReactMarker.addListener(
                new ReactMarker.MarkerListener() {
                    @Override
                    public void logMarker(ReactMarkerConstants name, @Nullable String tag, int instanceKey) {
                        System.out.println(name+" "+tag+" "+instanceKey);
                    }
                }
        );
    }
}
