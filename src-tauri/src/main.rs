#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::Manager;

fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
        .setup(|app| {
            let main_window = app
                .handle()
                .get_window("main")
                .ok_or("failed to get main window handle")?;
            #[cfg(target_os = "windows")]
            unsafe {
                use windows_sys::Win32::{
                    Graphics::Dwm::DwmExtendFrameIntoClientArea, UI::Controls::MARGINS,
                };
                let margins = MARGINS {
                    cxLeftWidth: 1,
                    cxRightWidth: 1,
                    cyTopHeight: 1,
                    cyBottomHeight: 1,
                };
                DwmExtendFrameIntoClientArea(main_window.hwnd()?.0, &margins);
            }
            Ok(())
        })
        .menu(tauri::Menu::os_default(&context.package_info().name))
        .on_window_event(|event| match event {
            _ => {}
        })
        .run(context)
        .expect("error while running tauri application");
}
