package com.reactnativemonorepo;

import androidx.annotation.Nullable;

import com.facebook.react.TurboReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;
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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CustomPackage extends TurboReactPackage {

    public CustomPackage() {}

    @Override
    public @Nullable NativeModule getModule(String name, ReactApplicationContext context) {
        switch (name) {
            case "RNSScreenStackHeaderConfig":
                return new ScreenStackHeaderConfigViewManager();
            case "RNGestureHandlerModule":
                return new RNGestureHandlerModule(context);
            case "RNCSafeAreaView":
                return new SafeAreaViewManager();
            case "RNSScreenContainer":
                return new ScreenContainerViewManager();
            case "RNSScreen":
                return new ScreenViewManager();
            case "RNSScreenStack":
                return new ScreenStackViewManager();
            case "RNSScreenStackHeaderSubview":
                return new ScreenStackHeaderSubviewManager();
            default:
                return null;
        }
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> viewManagers = new ArrayList<>();

        viewManagers.add(new ScreenStackHeaderConfigViewManager());
        viewManagers.add(new ScreenContainerViewManager());
        viewManagers.add(new ScreenStackViewManager());
        viewManagers.add(new ScreenStackHeaderSubviewManager());
        viewManagers.add(new SafeAreaViewManager());
        viewManagers.add(new ScreenViewManager());
        return viewManagers;
    }

    @Override
    public ReactModuleInfoProvider getReactModuleInfoProvider() {
        return new ReactModuleInfoProvider() {
            @Override
            public Map<String, ReactModuleInfo> getReactModuleInfos() {
                Map<String, ReactModuleInfo> map = new HashMap<>();
                map.put("RNGestureHandlerModule", new ReactModuleInfo("RNGestureHandlerModule", "com.swmansion.gesturehandler.react.RNGestureHandlerModule", false, false, true, false, false));
                map.put("RNCSafeAreaView", new ReactModuleInfo("RNCSafeAreaView", "com.th3rdwave.safeareacontext.SafeAreaViewManager", false, false, true, false, false));
                map.put("RNSScreenContainer", new ReactModuleInfo("RNSScreenContainer", "com.swmansion.rnscreens.ScreenContainerViewManager", false, false, true, false, false));
                map.put("RNSScreen", new ReactModuleInfo("RNSScreen", "com.swmansion.rnscreens.ScreenViewManager", false, false, true, false, false));
                map.put("RNSScreenStack", new ReactModuleInfo("RNSScreenStack", "com.swmansion.rnscreens.ScreenStackViewManager", false, false, true, false, false));
                map.put("RNSScreenStackHeaderConfig", new ReactModuleInfo("RNSScreenStackHeaderConfig", "com.swmansion.rnscreens.ScreenStackHeaderConfigViewManager", false, false, true, false, false));
                map.put("RNSScreenStackHeaderSubview", new ReactModuleInfo("RNSScreenStackHeaderSubview", "com.swmansion.rnscreens.ScreenStackHeaderSubviewManager", false, false, true, false, false));
                return map;
            }
        };
    }
}
